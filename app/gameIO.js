var clear = require('clear');

class GameIO {

  constructor(wrapperIO) {
    this.wrapperIO = wrapperIO;
  }

  cls() {
    clear();
  }

  getInput(message, callBack) {
    this.wrapperIO.cin(message, callBack);
  }

  print(string) {
    this.wrapperIO.cout(string);
  }
}
exports.GameIO = GameIO;
