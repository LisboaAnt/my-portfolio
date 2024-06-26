import React, { useState, useEffect } from 'react';
import { getDocumentContent } from '../../ts/documentService';
import './style.scss';
import MostradorDados from '../../components/MostradorDados';
import GraficoAcessos from '../../components/GraficoAcessos';
import { separarDadosRegistros } from '../../components/SeparadorDados';

interface DetalheAcesso {
  data: string;
  ip: string;
  pais: string;
}

const Publicdoc: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [acessosPorDataDetalhado, setAcessosPorDataDetalhado] = useState<DetalheAcesso[]>([]);

  const fetchContentAndSeparate = async () => {
    try {
      const data = await getDocumentContent();
      setContent(data);

      const { acessosPorDataDetalhado } = separarDadosRegistros(data);
      setAcessosPorDataDetalhado(acessosPorDataDetalhado);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContentAndSeparate();
  }, []);

  const detalhesAcesso = acessosPorDataDetalhado.map(({ data, pais }) => ({ data, pais, acessos: 1 }));

  return (
    <div className='container publicDoc'>
      <div className='row justify-content-center'>
        <div className='col-lg-10'>      
          <div className='map align-content-center justify-content-center'>
            { MostradorDados && content && (
              <MostradorDados dados={content} />
            )}
          </div>
          <div className='grafico m-3 '>
            { content && (
              <GraficoAcessos detalhesAcesso={detalhesAcesso} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publicdoc;
