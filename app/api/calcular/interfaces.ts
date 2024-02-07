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