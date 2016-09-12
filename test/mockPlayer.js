class MockPlayer {
  constructor() {
    this.wasCalled = false;
  }

  getMove(board, callBack) {
   this.wasCalled = true;
  }

  getMoveWasCalled() {
    return this.wasCalled;
  }
}
exports.MockPlayer = MockPlayer;
