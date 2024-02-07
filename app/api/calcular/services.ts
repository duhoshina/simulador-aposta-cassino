import { Jogador, SettingsSchema } from "./interfaces";

export function gerarPartida(jogadores: Jogador[], lucro_cassino: number, settings: SettingsSchema) {
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