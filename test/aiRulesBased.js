var expect = require('chai').expect;
var gameRules = require('../app/gameRules');
var gameBoard = require('../app/gameBoard');
var aiRulesBased = require('../app/aiRulesBased');


describe("Rules Based AI Player", function() {

  beforeEach(function() {
    this.board = new gameBoard.GameBoard(3);
    this.gameRules = new gameRules.GameRules();
    this.sut = new aiRulesBased.AiRulesBased(this.gameRules);
  });
  var expected;

  function callBack(results) {
    expect(results).to.equal(expected);
  }

  function callBackCorners(results) {
    expect(expected.includes(results)).to.equal(true);
  }

  describe("Playing a winning move", function() {
    it("Calls callBack with 0 if that move will win, instead of trying to block", function() {
      this.board._board[1] = 'X';
      this.board._board[3] = 'O';
      this.board._board[2] = 'X';
      this.board._board[4] = 'O';
      expected = 0;
      this.sut.getMove(this.board, callBack)
    });
    it("Calls callBack with 6 if that move will win", function() {
      this.board._board[4] = 'X';
      this.board._board[3] = 'O';
      this.board._board[2] = 'X';
      this.board._board[1] = 'O';
      expected = 6;
      this.sut.getMove(this.board, callBack);
    });
  });
  describe("Playing a blocking move", function() {
    it("Calls callBack with 0 if that move will block", function() {
      this.board._board[1] = 'O';
      this.board._board[3] = 'X';
      this.board._board[2] = 'O';
      this.board._board[8] = 'X';
      expected = 0;
      this.sut.getMove(this.board, callBack);
    });
    it("Calls callBack with 6 if that move will block", function() {
      this.board._board[4] = 'O';
      this.board._board[3] = 'X';
      this.board._board[2] = 'O';
      this.board._board[1] = 'X';
      expected = 6;
      this.sut.getMove(this.board, callBack);
    });
  });
  describe("Playing the center move", function() {
    it("Calls callBack with the center if player played corner for 1st move", function() {
      this.board._board[0] = 'X';
      expected = 4;
      this.sut.getMove(this.board, callBack);
    });

  });
  describe("Playing a corner move", function() {
    it("Calls callBack with a corner move if it can't win or block and center is taken", function() {
      this.board._board[1] = 'X';
      this.board._board[4] = 'O';
      expected = this.board.corners();
      this.sut.getMove(this.board, callBackCorners);
    });

  });
});
