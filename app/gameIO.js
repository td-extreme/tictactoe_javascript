class GameIO {

  constructor(wrapperIO) {
    this.wrapperIO = wrapperIO;
  }

  getInput (message, callBack) {
    this.wrapperIO.cin(message, callBack);
  }

  print(string) {
    this.wrapperIO.cout(string);
  }

  printBoard(board) {
    var lastRow = board.rowSize() * (board.rowSize() - 1);
    for (var i = 0; i <= lastRow; i += board.rowSize()) {
      for (var j = 0; j < board.rowSize(); ++j) {
        this.wrapperIO.cout(" " + board.getSquare(i + j) + " ");
        if (j !== board.rowSize() - 1) {
          this.wrapperIO.cout("|");
        }
      }
      if (i !== lastRow) {
        this.wrapperIO.cout("\n");
        for (var k = 0; k < board.rowSize(); ++k) {
          this.wrapperIO.cout("---");
          if (k !== board.rowSize() - 1) {
            this.wrapperIO.cout("|");
          }
        }
        this.wrapperIO.cout("\n");
      }
    }
    this.wrapperIO.cout("\n");
  }
}
exports.GameIO = GameIO;
