class MockWrapperIO {

  constructor () {
    this.recievedOutput = "";
  }

  cout (string) {
    this.recievedOutput = this.recievedOutput.concat(string);
  }

  cin (message, callBack) {
    callBack(this.mockInput);
  }

  getOutput() {
    return this.recievedOutput;
  }

  setInput (string) {
    this.mockInput = string;
  }
}
exports.MockWrapperIO = MockWrapperIO;
