export interface SettingsSchema {
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

export interface Jogador {
  index: number,
  saldo: number,
}

export interface PartidaData {
  quantidade_partidas: number,
  total_apostado: number,
  lucro_cassino: number,
  pessoas_lucro: number,
  percentual_pessoas_lucro: number,
  pessoas_prejuizo: number,
  percentual_pessoas_prejuizo: number,
  jogadores: Jogador[],
}