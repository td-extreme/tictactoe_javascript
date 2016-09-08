class WrapperIO {

  cout (string) {
    console.log(string);
  }

  cin (message, callBack) {
    var readline = require('readline');
    var rl = readline.createInterface({
      input: process.stdin,
        output: process.stdout
    });

    rl.question(message, (input) => {
      rl.close();
      callBack(input);
    });
  }
}
exports.WrapperIO = WrapperIO;
