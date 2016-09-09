class TicTacToeTerminalGame {

  constructor(player1, player2, board, key, rules, io) {
    this.player1 = player1;
    this.player2 = player2;
    this.board = board;
    this.key = key;
    this.rules = rules;
    this.io = io;
  }

   startGame() {
    for (var i in this.key._board) {
      this.key._board[i] = i;
    }
    this.updateScreen( () => { this.getMove() });
  }

   playMove(move) {
    this.board.playMove(move);
    this.updateGame();
  }

   updateGame() {
    var nextEvent;
    if (this.rules.gameOver(this.board)) {
      nextEvent = () => { this.gameOver() };
    } else {
      nextEvent = () => { this.getMove() };
    }
    this.updateScreen(nextEvent);
  }

   updateScreen(nextEvent) {
    this.io.cls();
    this.io.print("    KEY\n");
    this.io.printBoard(this.key);
    this.io.print("TIC TAC TOE\n");
    this.io.printBoard(this.board);
    nextEvent();
  }

   gameOver() {
    var winner = this.rules.winner(this.board);
    if (winner) {
      var message = "The winner is ".concat(winner);
      this.io.print(message);
    } else {
      this.io.print("Tied Game!");
    }
  }

   getMove() {
     if (this.board.currentPlayer() === 'X') {
       this.player1.getMove(this.board, (move) => { this.playMove(move) });
     } else {
       this.player2.getMove(this.board, (move) => { this.playMove(move) });
     }
   }
}
exports.TicTacToeTerminalGame = TicTacToeTerminalGame;
