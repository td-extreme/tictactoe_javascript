class GameBoard {
  constructor(rowSize) {
    this._rowSize = rowSize;
    this._board = new Array(this._boardSize);
    var boardSize = this._rowSize * this._rowSize;
    for (var i = 0; i < boardSize; ++i) {
      this._board[i] = ' ';
    }
  }

  deepCopy() {
    var boardCopy = new GameBoard(this.rowSize());
    for (var i = 0; i < this._board.length; ++i) {
      boardCopy._board[i] = this._board[i];
    }
    return boardCopy;
  }

  rowSize() {
    return this._rowSize;
  }

  size() {
    return this._board.length;
  }

  corners() {
    var corners = new Array();
    corners.push(0);
    corners.push(this.rowSize() - 1);
    corners.push((this.rowSize() * this.rowSize()) - this.rowSize());
    corners.push((this.rowSize() * this.rowSize()) - 1);
    return corners;
  }

  getSquare(space) {
    return this._board[space];
  }

  availableMoves() {
    var freeSpaces = new Array();
    for (var i = 0; i < this._board.length; ++i) {
      if (this.validMove(i)) {
        freeSpaces.push(i);
      }
    }
    return freeSpaces;
  }

  nonCurrentPlayer() {
    return (this.currentPlayer() === 'X' ? 'O' : 'X');
  }

  currentPlayer() {
    return (this.availableMoves().length % 2 == 0 ? 'O' : 'X');
  }

  playMove(space) {
    if (this._board[space] === ' ') {
      this._board[space] = this.currentPlayer();
      return true;
    } else {
      return false;
    }
  }

  validMove(space) {
    return this._board[space] === ' ';
  }

  empty() {
    for (var i = 0; i < this._board.length; ++i) {
      if (!this.validMove(i)) {
        return false; }
    }
    return true;
  }

  full() {
    for (var i = 0; i < this._board.length; ++i) {
      if (this.validMove(i)) {
        return false; }
    }
    return true;
  }
}
exports.GameBoard = GameBoard;
