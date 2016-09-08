class WrapperIO {

  cout (string) {
    console.log(string);
  }

 cin (message, caller, callback) {
    var readline = require('readline');
    var rl = readline.createInterface({
      input: process.stdin,
        output: process.stdout
    });

    rl.question(message, (input) => {
      rl.close();
      callback(caller, input);
    });
  }
}
exports.WrapperIO = WrapperIO;
