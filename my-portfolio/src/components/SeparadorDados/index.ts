// components/SeparadorDados.ts

interface Registro {
  data: string;
  ip: string;
  pais: string;
}

export function separarDadosRegistros(registrosString: string): Registro[] {
  const registros = registrosString.trim().split('\n');
  const dadosSeparados: Registro[] = registros.map((registro) => {
    const partes = registro.split(' - ');
    const data = partes[0].trim();
    const ip = partes[1].split(': ')[1].trim();
    const pais = partes[2].split(', ')[1].trim();
    return { data, ip, pais };
  });
  return dadosSeparados;
}
