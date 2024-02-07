import { gerarPartida } from "./services";
import { Jogador, SettingsSchema } from "./interfaces";

const settings: SettingsSchema = {
  game: {
    quantidade_maxima_partidas: 10,
    quantidade_jogadores: 10,
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