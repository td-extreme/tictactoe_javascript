class MockBoard {
  constructor() {
    this.validMoveReturnValue = new Array(9);
  }
  setCurrentPlayer(mark) {
    this._currentPlayer = mark;
  }

  currentPlayer() {
    return this._currentPlayer;
  }

  setValidMove(space, value) {
    this.validMoveReturnValue[space] = value;
  }

  playMove(space) {
    this.playMoveCalled = true;
    return this.validMoveReturnValue[space];
  }

  playMoveWasCalled() {
    return this.playMoveCalled;
  }
}
exports.MockBoard = MockBoard;
