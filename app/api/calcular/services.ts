import { PartidaData, SettingsSchema } from "./interfaces";

export function gerarPartida({
  jogadores,
  quantidade_partidas, 
  total_apostado, 
  lucro_cassino,
  pessoas_lucro,
  percentual_pessoas_lucro, 
  pessoas_prejuizo,
  percentual_pessoas_prejuizo, 
}: PartidaData, settings: SettingsSchema): PartidaData {
  let seed: number = 0;

  for(let jogador of jogadores){
    seed = Math.random();

    const resultadoAposta = seed < settings.game.chance_ganhar_jogo;
    
    jogador.saldo -= settings.players.valor_cada_aposta;

    // console.log(`Jogador: ${jogador.index} | Saldo: ${jogador.saldo} | Seed: ${seed} | Chance de Ganhar: ${settings.game.chance_ganhar_jogo} | Resultado Aposta: ${resultadoAposta}`);

    if (resultadoAposta){
      jogador.saldo += (settings.players.valor_cada_aposta * 2);
      lucro_cassino -= settings.players.valor_cada_aposta;
    } else {
      lucro_cassino += settings.players.valor_cada_aposta;
    }

    total_apostado += settings.players.valor_cada_aposta;

    quantidade_partidas++;
  }

  return { 
    quantidade_partidas,
    total_apostado,
    pessoas_lucro,
    percentual_pessoas_lucro, 
    pessoas_prejuizo,
    percentual_pessoas_prejuizo, 
    lucro_cassino, 
    jogadores,
  };
}