class MockRules {

  setGameOver(value) {
    this.gameOverReturnValue = value;
  }

  gameOver(board) {
    return this.gameOverReturnValue;
  }

  setTiedGame(value) {
    this.tiedGameReturnValue = value;
  }

  tiedGame(board) {
    return this.tiedGameReturnValue;
  }

  setWinner(value) {
    this.winnerReturnValue = value;
  }

  winner(board) {
    return this.winnerReturnValue;
  }
}
exports.MockRules = MockRules;
