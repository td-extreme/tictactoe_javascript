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

  describe("Playing a winning move", function() {
    it("Returns 0 if that move will win, instead of trying to block", function() {
      this.board._board[1] = 'X';
      this.board._board[3] = 'O';
      this.board._board[2] = 'X';
      this.board._board[4] = 'O';
      expect(this.sut.getMove(this.board)).to.equal(0);
    });
    it("Returns 6 if that move will win", function() {
      this.board._board[4] = 'X';
      this.board._board[3] = 'O';
      this.board._board[2] = 'X';
      this.board._board[1] = 'O';
      expect(this.sut.getMove(this.board)).to.equal(6);
    });
 });
  describe("Playing a blocking move", function() {
    it("Returns 0 if that move will block", function() {
      this.board._board[1] = 'O';
      this.board._board[3] = 'X';
      this.board._board[2] = 'O';
      this.board._board[8] = 'X';
      expect(this.sut.getMove(this.board)).to.equal(0);
    });
    it("Returns 6 if that move will block", function() {
      this.board._board[4] = 'O';
      this.board._board[3] = 'X';
      this.board._board[2] = 'O';
      this.board._board[1] = 'X';
      expect(this.sut.getMove(this.board)).to.equal(6);
    });
 });
  describe("Playing the center move", function() {
    it("plays the center if player played corner for 1st move", function() {
      this.board._board[0] = 'X';
      expect(this.sut.getMove(this.board)).to.equal(4);
    });

  });
  describe("Playing a corner move", function() {
    it("Plays a corner move if it can't win or block and center is taken", function() {
      this.board._board[1] = 'X';
      this.board._board[4] = 'O';
      var move = this.sut.getMove(this.board);
      var corners = this.board.corners();
      expect(corners.includes(move)).to.equal(true);
    });
  });
});
