var clear = require('clear');

class GameIO {

  constructor(wrapperIO) {
    this.wrapperIO = wrapperIO;
  }

  cls () {
    clear();
  }

  getInput (message, callBack) {
    this.wrapperIO.cin(message, callBack);
  }

  print(string) {
    this.wrapperIO.cout(string);
  }

  printBoard(board) {
    var lastRow = board.rowSize() * (board.rowSize() - 1);
    var boardOutput = "";
    for (var i = 0; i <= lastRow; i += board.rowSize()) {
      for (var j = 0; j < board.rowSize(); ++j) {
        boardOutput = boardOutput.concat(" " + board.getSquare(i + j) + " ");
        if (j !== board.rowSize() - 1) {
          boardOutput = boardOutput.concat("|");
        }
      }
      if (i !== lastRow) {
        boardOutput = boardOutput.concat("\n");
        for (var k = 0; k < board.rowSize(); ++k) {
          boardOutput = boardOutput.concat("---");
          if (k !== board.rowSize() - 1) {
            boardOutput = boardOutput.concat("|");
          }
        }
        boardOutput = boardOutput.concat("\n");
      }
    }
    boardOutput = boardOutput.concat("\n");
    this.wrapperIO.cout(boardOutput);
  }
}
exports.GameIO = GameIO;
