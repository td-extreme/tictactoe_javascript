class HumanPlayer {
  constructor (gameIO) {
    this.gameIO = gameIO;
  }

  getMove(board, callBack) {
    var availableMoves = board.availableMoves();
    var message = "Please enter one of the following spaces ";
    for (var i in availableMoves) {
      message = message.concat(availableMoves[i] + " ");
    }
    message = message.concat(": ");
    this.gameIO.getInput(message, callBack);
  }

}
exports.HumanPlayer = HumanPlayer;
