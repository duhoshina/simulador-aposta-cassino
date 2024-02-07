const settings: SettingsSchema = {
  game: {
    quantidade_maxima_partidas: 10,
    quantidade_jogadores: 10,
    chance_ganhar_jogo: 0.48,
  },
  players: {
    saldo_inicial: 200.0,
    valor_cada_aposta: 20.0,
  }
};

let jogadores: Jogador[] = [];

export function GET(req: Request){
  const partida = gerarPartida(settings)

  return Response.json(partida);
}

function gerarPartida(settings: SettingsSchema) {

  for (let i = 0; i < settings.game.quantidade_jogadores; i++) {
    jogadores.push({
      index: i,
      saldo: settings.players.saldo_inicial,
    });
  }

  let quantidade_pessoas_lucro = 0;
  let quantidade_pessoas_prejuizo = 0;
  let lucro_cassino = 0;

  for(let jogador of jogadores){
    const resultadoAposta = Math.random() < settings.game.chance_ganhar_jogo;

    if (resultadoAposta){
      jogador.saldo += settings.players.valor_cada_aposta * 2;
    } else {
      jogador.saldo -= settings.players.valor_cada_aposta;
      lucro_cassino += settings.players.valor_cada_aposta;
    }

    console.log(`jogador[${jogador.index}]: ${jogador.saldo}`);
  }

  console.log(`lucro cassino: ${lucro_cassino}`)

  return {
    status: 200,
    settings,
    data: {
      quantidade_pessoas_lucro,
      quantidade_pessoas_prejuizo,
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