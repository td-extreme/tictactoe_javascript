class HumanPlayer {
  constructor (gameIO) {
    this.gameIO = gameIO;
  }

  getMove(board, callBack) {
    var availableMoves = board.availableMoves();
    var message = "Please enter one of the following spaces ";
    availableMoves.forEach(function(move) {
      message = message.concat(move + " ");
    });
    message = message.concat(": ");
    this.gameIO.getInput(message, callBack);
  }

}
exports.HumanPlayer = HumanPlayer;
