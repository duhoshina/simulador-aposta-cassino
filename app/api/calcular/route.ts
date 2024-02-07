const settings: SettingsSchema = {
  game: {
    quantidade_maxima_partidas: 10,
    quantidade_jogadores: 10,
    chance_ganhar_jogo: 0.48,
  },
  players: {
    saldo_inicial: 200.0,
    valor_cada_aposta: 22.0,
  }
};

export function GET(req: Request){
  let jogadores: Jogador[] = [];

  const partida = gerarPartida(jogadores, settings)
  
  return Response.json(partida);
}

function gerarPartida(jogadores: Jogador[], settings: SettingsSchema) {

  for (let i = 0; i < settings.game.quantidade_jogadores; i++) {
    jogadores.push({
      index: i,
      saldo: settings.players.saldo_inicial,
    });
  }

  let quantidade_pessoas_lucro = 0;
  let quantidade_pessoas_prejuizo = 0;
  let total_apostado = settings.players.valor_cada_aposta * jogadores.length;
  let lucro_cassino = 0;

  for(let jogador of jogadores){
    const resultadoAposta = Math.random() < settings.game.chance_ganhar_jogo;

    if (resultadoAposta){
      jogador.saldo += settings.players.valor_cada_aposta * 2;
      quantidade_pessoas_lucro++;
    } else {
      jogador.saldo -= settings.players.valor_cada_aposta;
      lucro_cassino += settings.players.valor_cada_aposta;
      quantidade_pessoas_prejuizo++
    }

    console.log(`jogador[${jogador.index}]: R$${jogador.saldo}`);
  }

  console.log(`total apostado: R$${total_apostado}`);
  console.log(`lucro cassino: R$${lucro_cassino}`);
  console.log(`pessoas no lucro: ${quantidade_pessoas_lucro}`);
  console.log(`pessoas no prejuizo: ${quantidade_pessoas_prejuizo}`);

  return {
    status: 200,
    settings,
    data: {
      quantidade_pessoas_lucro,
      quantidade_pessoas_prejuizo,
      total_apostado,
      lucro_cassino,
    },
  };
}

interface SettingsSchema {
  game: {
    quantidade_maxima_partidas: number,
    quantidade_jogadores: number,
    chance_ganhar_jogo: number,
  },
  players: {
    saldo_inicial: number,
    valor_cada_aposta: number,
  }
}

interface Jogador {
  index: number,
  saldo: number,
}