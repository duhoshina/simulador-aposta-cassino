const settings: SettingsSchema = {
  game: {
    quantidade_maxima_partidas: 10,
    quantidade_jogadores: 1500,
    chance_ganhar_jogo: 0.486,
  },
  players: {
    saldo_inicial: 1000.0,
    valor_cada_aposta: 100.0,
  }
};

export function GET(req: Request){
  let jogadores: Jogador[] = [];
  let lucro_cassino = 0;

  for(let i = 0; i < settings.game.quantidade_jogadores; i++){
    jogadores.push({
      index: i,
      saldo: settings.players.saldo_inicial,
    });
  }

  let quantidade_partidas = 0;
  
  for(let i = 0; i < settings.game.quantidade_maxima_partidas; i++){
    lucro_cassino = gerarPartida(jogadores, lucro_cassino, settings);
    quantidade_partidas++
  }

  let pessoas_lucro = 0;
  let pessoas_prejuizo = 0;

  for(const jogador of jogadores){
    if(jogador.saldo > settings.players.saldo_inicial){
      pessoas_lucro++
    } else {
      pessoas_prejuizo++
    }
  }

  const res = {
    status: 200,
    settings,
    data: {
      quantidade_partidas,
      lucro_cassino,
      pessoas_lucro,
      pessoas_prejuizo,
    }
  }
  
  return Response.json(res);
}

function gerarPartida(jogadores: Jogador[], lucro_cassino: number, settings: SettingsSchema) {
  for(let jogador of jogadores){
    const resultadoAposta = Math.random() < settings.game.chance_ganhar_jogo;

    if (resultadoAposta){
      jogador.saldo += settings.players.valor_cada_aposta * 2;
    } else {
      jogador.saldo -= settings.players.valor_cada_aposta;
      lucro_cassino += settings.players.valor_cada_aposta;
    }
  }

  return lucro_cassino;
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