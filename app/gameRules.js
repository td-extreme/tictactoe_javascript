class GameRules {

  gameOver (board) {
    return this.tiedGame(board) || !!this.winner(board);
  }

  tiedGame (board) {
    return board.full() && !this.winner(board);
  }

  winner (board) {
    return (this.checkColsForWinner(board) ||
        this.checkRowsForWinner(board) ||
        this.checkDiagnolForWinner(board));
  }

  checkDiagnolForWinner (board) {
    var ascendingStart = board.rowSize() - 1;
    var ascendingEnd = ascendingStart * board.rowSize() + 1;
    if (this.isMatching(0, board.size(), board.rowSize() + 1, board)) {
     return board.getSquare(0);
    } else if (this.isMatching(ascendingStart, ascendingEnd, ascendingStart, board)) {
      return board.getSquare(ascendingStart);
    } else {
     return null;
    }
  }

  checkColsForWinner (board) {
    var colSize = board.rowSize();
    for (var i = 0; i <= colSize; ++i) {
      var end = colSize * (colSize -1) + i + 1;
      if (this.isMatching(i, end, colSize, board)) {
        return board.getSquare(i);
      }
    }
    return null;
  }

  checkRowsForWinner (board) {
    var rowSize = board.rowSize();
    var startOfLastRow = rowSize * (rowSize - 1);
    for (var i = 0; i <= startOfLastRow; i += rowSize) {
      if (this.isMatching(i, i + rowSize, 1, board)) {
        return board.getSquare(i);
      }
    }
    return null;
  }

  isMatching (start, end, incrementBy, board) {
    if (board.getSquare(start) === ' ') { return null; }
    for (var i = start; i < end; i += incrementBy) {
      if (board.getSquare(start) !== board.getSquare(i)) {
        return null;
      }
    }
    return true;
  }
}

exports.GameRules = GameRules;
