import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { separarDadosRegistros } from '../SeparadorDados';
import './style.scss'
interface Registro {
  data: string;
  ip: string;
  pais: string;
}

interface LocalAcesso {
  cidade: string;
  acessos: number;
}

interface Props {
  dados: string | null;
}

const MostradorDados: React.FC<Props> = ({ dados }) => {
  const [dadosSeparados, setDadosSeparados] = useState<(Registro & { position?: [number, number] | null })[]>([]);
  const [locaisAcessados, setLocaisAcessados] = useState<LocalAcesso[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Estado para controlar o carregamento

  useEffect(() => {
    const carregarDados = async () => {
      if (!dados) {
        setDadosSeparados([]);
        setLocaisAcessados([]);
        setLoading(false);
        return;
      }

      const { registros, locaisAcessados } = separarDadosRegistros(dados);
      setLocaisAcessados(locaisAcessados);

      // Inicializa os dadosSeparados com posição nula para cada registro
      const registrosComPosicaoInicial = registros.map(registro => ({ ...registro, position: null }));
      setDadosSeparados(registrosComPosicaoInicial);

      // Busca a localização para cada registro
      await buscarLocalizacoes(registros);
    };

    const buscarLocalizacoes = async (registros: Registro[]) => {
      const token = 'a402222fbfaaf6'; // Substitua pelo seu token da API ipinfo.io
      const cache: { [key: string]: [number, number] } = {};

      const promises = registros.map(async (registro) => {
        if (cache[registro.ip]) {
          return cache[registro.ip];
        }

        try {
          const response = await axios.get(`https://ipinfo.io/${registro.ip}/?token=${token}`);
          if (response.data && response.data.loc) {
            const [lat, lon] = response.data.loc.split(',').map(parseFloat);
            const pos: [number, number] = [lat, lon];
            cache[registro.ip] = pos;
            return pos;
          } else {
            console.error(`Não foi possível encontrar a localização para o IP: ${registro.ip}`);
            return null;
          }
        } catch (error) {
          console.error('Erro ao buscar localização:', error);
          return null;
        }
      });

      // Atualiza as posições dos marcadores quando todas as promessas forem resolvidas
      Promise.all(promises).then((positions) => {
        const novosDadosSeparados = registros.map((registro, index) => ({
          ...registro,
          position: positions[index] || null,
        }));
        setDadosSeparados(novosDadosSeparados);
        setLoading(false); // Marca que o carregamento foi concluído


      });
    };

    carregarDados();
  }, [dados]);

  return (
    <div className='d-flex justify-content-center'>
      <div className='Dados-dos-Registros m-3 px-5' style={{ width: '100vh' }}>
        <h2>Dados dos Registros</h2>
        <div className='mapacomicon' style={{ height: '50vh', width: '80vh' }}>
          <MapContainer center={[0, 0]} zoom={1} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Renderiza os marcadores somente quando o carregamento estiver completo */}
            {!loading && dadosSeparados.map((registro, index) => (
              registro.position && (
                <Geocodificador key={index} registro={registro} />
              )
            ))}
          </MapContainer>
        </div>
      </div>
      <div className='Locais-Mais-Acessados m-3 px-3'>
        <h2>Locais Mais Acessados</h2>
        <ul style={{ maxHeight: '40vh', overflowY: 'auto' }}>
          {locaisAcessados.map((local, index) => (
            <li key={index}>
              {local.acessos} - {local.cidade}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface GeocodificadorProps {
  registro: Registro & { position?: [number, number] | null };
}

const Geocodificador: React.FC<GeocodificadorProps> = ({ registro }) => {
  const [position] = useState<[number, number] | null>(registro.position || null);

  return position ? (
    <Marker position={position}>
      <Popup>
        <div>
          <p><strong>Registro:</strong> {registro.data}</p>
          <p><strong>País:</strong> {registro.pais}</p>
        </div>
      </Popup>
    </Marker>
  ) : null;
};

export default MostradorDados;
