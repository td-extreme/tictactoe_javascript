class MockWrapperIO {

  constructor() {
    this.recievedOutput = "";
  }

  cout(string) {
    this.recievedOutput = string;
  }

  cin(message, callBack) {
    this.recievedOutput = message;
    callBack(this.mockInput);
  }

  getOutput() {
    return this.recievedOutput;
  }

  setInput(string) {
    this.mockInput = string;
  }
}
exports.MockWrapperIO = MockWrapperIO;
