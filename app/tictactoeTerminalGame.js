var tictactoeGame = require('./tictactoeGame');

class TicTacToeTerminalGame {

  constructor(player1, player2, board, key, rules, io, gameBoardFormatter) {
    this.ttt = new tictactoeGame.TicTacToeGame(board, rules);
    this.player1 = player1;
    this.player2 = player2;
    this.key = key;
    this.io = io;
    this.gameBoardFormatter = gameBoardFormatter;
  }

  startGame() {
    this.setUpLegend();
    this.updateScreen( () => { this.getMove() });
  }

  setUpLegend() {
    for (var i in this.key._board) {
      this.key._board[i] = i;
    }
  }

  updateGame() {
    var nextEvent;
    if (this.ttt.gameState() === 'playing') {
      nextEvent = () => { this.getMove() };
    } else {
      nextEvent = () => { this.gameOver() };
    }
    this.updateScreen(nextEvent);
  }

  getMove() {
    if (this.ttt.currentPlayer() === 'X') {
      this.player1.getMove(this.ttt.getBoard(), (move) => { this.playMove(move) });
    } else {
      this.player2.getMove(this.ttt.getBoard(), (move) => { this.playMove(move) });
    }
  }

  playMove(move) {
    this.ttt.playMove(move);
    this.updateGame();
  }

  updateScreen(nextEvent) {
    this.io.cls();
    this.io.print("    KEY\n");
    this.io.print(this.gameBoardFormatter.formatBoard(this.key));
    this.io.print("TIC TAC TOE\n");
    this.io.print(this.gameBoardFormatter.formatBoard(this.ttt.getBoard()));
    nextEvent();
  }

  gameOver() {
    var winner = this.ttt.gameState();
    if (winner === "tied") {
      this.io.print("Tied Game!");
    } else {
      var message = "The winner is ".concat(winner);
      this.io.print(message);
    }
  }

}
exports.TicTacToeTerminalGame = TicTacToeTerminalGame;
