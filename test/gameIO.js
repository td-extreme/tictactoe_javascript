var expect = require("chai").expect;
var gameIO = require('../app/gameIO');
var gameBoard = require('../app/gameBoard');
var mockWrapperIO = require('./mockWrapperIO');

function fillBoard(board) {
  for (var i = 0; i < board.size(); ++i) {
    board.playMove(i);
  }
}

describe("Tic Tac Toe Game IO", function() {

  beforeEach(function() {
    this.mockIO = new mockWrapperIO.MockWrapperIO();
    this.sut = new gameIO.GameIO(this.mockIO);
    this.board4x4 = new gameBoard.GameBoard(4);
    this.board = new gameBoard.GameBoard(3);
  });

  describe("Basic input and output", function() {
    it("sends a string to the wrapperIO", function() {
      this.sut.print("Test");
      expect(this.mockIO.getOutput()).to.equal("Test");
    });

    it("sends the response to the callBack function", function() {
      var message = "example prompt: ";
      this.mockIO.setInput("0");
      var move = this.sut.getInput(message, callBack);
    });

    function callBack(results) {
      expect(results).to.equal("0");
    }
  });
});
