import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



interface DetalheAcesso {
  data: string; // Data no formato 'YYYY-MM-DD'
  pais: string;
  acessos: number;
}

interface GraficoAcessosProps {
  detalhesAcesso: DetalheAcesso[];
}

const GraficoAcessos: React.FC<GraficoAcessosProps> = ({ detalhesAcesso }) => {
  // Agrupa os acessos por semana
  const acessosPorSemana: { [semana: string]: number } = {};
  detalhesAcesso.forEach(({ data, acessos }) => {
    const dataObj = new Date(data);
    const primeiraDataSemana = new Date(dataObj.getFullYear(), dataObj.getMonth(), dataObj.getDate() - dataObj.getDay());
    const semana = `${primeiraDataSemana.getFullYear()}-${primeiraDataSemana.getMonth() + 1}-${primeiraDataSemana.getDate()}`;

    if (acessosPorSemana[semana]) {
      acessosPorSemana[semana] += acessos;
    } else {
      acessosPorSemana[semana] = acessos;
    }
  });

  // Converte os dados para o formato aceito pelo Recharts
  const dadosGrafico = Object.keys(acessosPorSemana).map((semana) => ({
    data: semana,
    acessos: acessosPorSemana[semana],
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={dadosGrafico}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="acessos" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoAcessos;
