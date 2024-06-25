import React, { useState, useEffect } from 'react';
import { separarDadosRegistros } from '../SeparadorDados';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

interface Registro {
  data: string;
  ip: string;
  pais: string;
}

interface Props {
  dados: string | null;
}

const MostradorDados: React.FC<Props> = ({ dados }) => {
  const [dadosSeparados, setDadosSeparados] = useState<Registro[]>([]);

  useEffect(() => {
    const separarDados = async () => {
      if (!dados) {
        setDadosSeparados([]);
        return;
      }

      const dadosSeparados = separarDadosRegistros(dados);
      setDadosSeparados(dadosSeparados);
    };

    separarDados();
  }, [dados]);

  return (
    <div>
      <h2>Dados dos Registros</h2>
      <div >
        <MapContainer center={[0, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {dadosSeparados.map((registro, index) => (
            <Geocodificador key={index} registro={registro} />
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

interface GeocodificadorProps {
  registro: Registro;
}

const Geocodificador: React.FC<GeocodificadorProps> = ({ registro }) => {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${registro.ip}`);
        if (response.data && response.data.length > 0) {
          setPosition([parseFloat(response.data[0].lat), parseFloat(response.data[0].lon)]);
        } else {
          console.error(`Não foi possível encontrar a localização para o IP: ${registro.ip}`);
        }
      } catch (error) {
        console.error('Erro ao buscar localização:', error);
      }
    };

    fetchLocation();
  }, [registro.ip]);

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
