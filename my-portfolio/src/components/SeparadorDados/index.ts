interface Registro {
  data: string;
  ip: string;
  pais: string;
}

interface LocalAcesso {
  cidade: string;
  acessos: number;
}

interface DetalheAcesso {
  data: string;
  ip: string;
  pais: string;
}

export function separarDadosRegistros(registrosString: string): { registros: Registro[], locaisAcessados: LocalAcesso[], acessosPorDataDetalhado: DetalheAcesso[] } {
  const registros = registrosString.trim().split('\n');
  const dadosSeparados: Registro[] = [];
  const contadorLocais: { [key: string]: number } = {};
  const acessosPorDataDetalhado: DetalheAcesso[] = [];

  registros.forEach((registro) => {
    const partes = registro.split(' - ');
    const data = partes[0].trim();
    const ip = partes[1].split(': ')[1].trim();
    const cidade = partes[2].split(', ')[0].trim(); // Assume que a cidade está antes da vírgula
    const pais = partes[2].split(', ')[1].trim();

    // Manter todos os detalhes de acesso por data, incluindo repetições de IPs
    acessosPorDataDetalhado.push({ data, ip, pais });

    // Conta os acessos por cidade
    if (contadorLocais[cidade]) {
      contadorLocais[cidade]++;
    } else {
      contadorLocais[cidade] = 1;
    }

    // Adiciona o registro apenas se não houver duplicatas da mesma cidade
    const registroExistente = dadosSeparados.find(r => r.ip === ip);
    if (!registroExistente) {
      dadosSeparados.push({ data, ip, pais });
    }
  });

  const locaisAcessados: LocalAcesso[] = Object.entries(contadorLocais).map(([cidade, acessos]) => ({ cidade, acessos }));
  locaisAcessados.sort((a, b) => b.acessos - a.acessos); // Ordena os locais mais acessados

  return { registros: dadosSeparados, locaisAcessados, acessosPorDataDetalhado };
}
