var expect = require("chai").expect;
var gameIO = require('../app/gameIO');
var gameBoard = require('../app/gameBoard');
var mockWrapperIO = require('./mockWrapperIO');
var humanPlayer = require('../app/humanPlayer');

describe("Human Player", function() {
    var mockIO = new mockWrapperIO.MockWrapperIO();

  beforeEach(function() {
    this.gameIO = new gameIO.GameIO(mockIO);
    this.gameBoard = new gameBoard.GameBoard(3);
    this.sut = new humanPlayer.HumanPlayer(this.gameIO);
    });

  describe("Getting a move", function() {
    it("Properly, formats the input prompt", function() {
      this.gameBoard.playMove(3);
      this.sut.getMove(this.gameBoard, callBack01);
    });

    function callBack01 (results) {
      var shouldBe = "Please enter one of the following spaces 0 1 2 4 5 6 7 8 : ";
      expect(mockIO.getOutput()).to.equal(shouldBe);
    }

    it("Sends the results to the callBack function", function() {
      mockIO.setInput('3');
      this.sut.getMove(this.gameBoard, callBack02);
    });

    function callBack02 (results) {
      expect(results).to.equal('3');
    }
  });
});
