class TicTacToeGame {

  constructor(board, rules) {
    this.board = board;
    this.rules = rules;
  }

  currentPlayer() {
    return this.board.currentPlayer();
  }

  gameState() {
   return this.winner() ||
      this.tiedGame() ||
      "playing";
  }

  tiedGame() {
    if (this.rules.tiedGame(this.board)) {
      return "tied";
    }
  }

  winner() {
    return this.rules.winner(this.board);
  }

  playMove(move) {
    return this.board.playMove(move);
  }

  getBoard() {
    return this.board;
  }
}
exports.TicTacToeGame = TicTacToeGame;
