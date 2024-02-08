import { gerarPartida } from "./services";
import { PartidaData, SettingsSchema } from "./interfaces";

export function GET(req: Request){
  const settings: SettingsSchema = {
    game: {
      quantidade_maxima_partidas: 10,
      quantidade_jogadores: 1500,
      chance_ganhar_jogo: 0.486,
    },
    players: {
      saldo_inicial: 200.0,
      valor_cada_aposta: 20.0,
    }
  };

  let data: PartidaData = {
    total_apostado: 0,
    quantidade_partidas: 0,
    lucro_cassino: 0,
    pessoas_lucro: 0,
    pessoas_prejuizo: 0,
    jogadores: [],
  };

  for(let i = 0; i < settings.game.quantidade_jogadores; i++){
    data.jogadores.push({
      index: i,
      saldo: settings.players.saldo_inicial,
    });
  }
  
  for(let i = 0; i < settings.game.quantidade_maxima_partidas; i++){
    data = gerarPartida(data, settings);
  }

  for(const jogador of data.jogadores) {
    if(jogador.saldo > settings.players.saldo_inicial) {
      data.pessoas_lucro++
    } else {
      data.pessoas_prejuizo++
    }
  }

  const res = {
    status: 200,
    settings,
    data,
  }
  
  return Response.json(res);
}