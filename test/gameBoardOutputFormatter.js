var expect = require("chai").expect;
var gameBoard = require('../app/gameBoard');
var sut = require('../app/gameBoardOutputFormatter');

function fillBoard(board) {
  for (var i = 0; i < board.size(); ++i) {
    board.playMove(i);
  }
}

beforeEach(function() {
  this.board = new gameBoard.GameBoard(3);
  this.board4x4 = new gameBoard.GameBoard(4);
  this.sut = new sut.GameBoardOutputFormatter();
});

describe("Game Board Output Formatter", function() {
  describe("a 3x3 board", function() {
    it("formats out a blank board", function() {
      var boardShouldBe = "   |   |   \n" +
      "---|---|---\n" +
      "   |   |   \n" +
      "---|---|---\n" +
      "   |   |   \n";
    expect(this.sut.formatBoard(this.board)).to.equal(boardShouldBe);
    });
    it("formats out a blank filled out board", function() {
      fillBoard(this.board);

      var boardShouldBe = " X | O | X \n" +
      "---|---|---\n" +
      " O | X | O \n" +
      "---|---|---\n" +
      " X | O | X \n";
    expect(this.sut.formatBoard(this.board)).to.equal(boardShouldBe);
    });
  });
  describe("a 4x4 board", function() {
    it("formats out a blank board", function() {
      var boardShouldBe = "   |   |   |   \n" +
      "---|---|---|---\n" +
      "   |   |   |   \n" +
      "---|---|---|---\n" +
      "   |   |   |   \n" +
      "---|---|---|---\n" +
      "   |   |   |   \n";
    expect(this.sut.formatBoard(this.board4x4)).to.equal(boardShouldBe);
    });
    it("formats out a blank filled out board", function() {
      fillBoard(this.board4x4);
      var boardShouldBe = " O | X | O | X \n" +
      "---|---|---|---\n" +
      " O | X | O | X \n" +
      "---|---|---|---\n" +
      " O | X | O | X \n" +
      "---|---|---|---\n" +
      " O | X | O | X \n";

    expect(this.sut.formatBoard(this.board4x4)).to.equal(boardShouldBe);
    });
  });
});
