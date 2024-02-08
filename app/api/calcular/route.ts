import { gerarPartida } from "./services";
import { PartidaData, SettingsSchema } from "./interfaces";

export function GET(req: Request){
  const settings: SettingsSchema = {
    game: {
      quantidade_maxima_partidas: 1,
      quantidade_jogadores: 10,
      chance_ganhar_jogo: 0.486,
    },
    players: {
      saldo_inicial: 10.0,
      valor_cada_aposta: 10.0,
    }
  };

  let data: PartidaData = {
    total_apostado: 0,
    quantidade_partidas: 0,
    lucro_cassino: 0,
    pessoas_lucro: 0,
    percentual_pessoas_lucro: 0,
    pessoas_prejuizo: 0,
    percentual_pessoas_prejuizo: 0,
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

  data.percentual_pessoas_lucro = parseFloat((data.pessoas_lucro / settings.game.quantidade_jogadores * 100).toFixed(1));
  data.percentual_pessoas_prejuizo = parseFloat((data.pessoas_prejuizo / settings.game.quantidade_jogadores * 100).toFixed(1));

  const res = {
    status: 200,
    settings,
    data,
  }
  
  return Response.json(res);
}