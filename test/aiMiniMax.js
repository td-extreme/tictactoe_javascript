var expect = require('chai').expect;
var mockRules = require('./mockRules');
var rules = require('../app/gameRules');
var board = require('../app/gameBoard');

var sut = require('../app/aiMiniMax');

describe("Ai MiniMax", function() {
  var expected;
  function callBack(results) {
    expect(results).to.equal(expected);
  }


  beforeEach(function() {
    this.mockRules = new mockRules.MockRules();
    this.rules = new rules.GameRules();
    this.board = new board.GameBoard(3);
    this.sutMockRules = new sut.AiMiniMax(this.mockRules);
    this.sut = new sut.AiMiniMax(this.rules);
  });

  describe("Playing a game ending move", function() {
    it("will play to block if it can't win", function() {
      this.board._board[1] = 'X';
      this.board._board[2] = 'X';
      this.board._board[3] = 'X';
      this.board._board[4] = 'X';
      this.board._board[0] = 'O';
      this.board._board[5] = 'O';
      this.board._board[6] = 'O';
      expected = 7;
      this.sut.getMove(this.board, callBack);
    });
    it("will play to win even though it can block as well", function() {
      this.board._board[5] = 'O';
      this.board._board[7] = 'O';
      this.board._board[2] = 'O';
      this.board._board[1] = 'X';
      this.board._board[3] = 'X';
      this.board._board[4] = 'X';
      this.board._board[6] = 'X';
      expected = 8;
      this.sut.getMove(this.board, callBack);
    });
    it("will play to win", function() {
      this.board._board[4] = 'O';
      this.board._board[6] = 'O';
      this.board._board[8] = 'O';
      this.board._board[0] = 'X';
      this.board._board[3] = 'X';
      this.board._board[5] = 'X';
      this.board._board[7] = 'X';
      expected = 2;
      this.sut.getMove(this.board, callBack);
    });

    describe("Taking its first turn", function() {
      it("plays the top left corner", function() {
        this.board.playMove(4);
        expected = 0;
        this.sut.getMove(this.board, callBack);
      });
    });
    describe("Preventing forks", function() {
      it("prevents oppoent from setting up a fork", function() {
      this.board._board[0] = 'X';
      this.board._board[8] = 'X';
      this.board._board[4] = 'O';
      expected = 1;
      this.sut.getMove(this.board, callBack);
      });
    });
    describe("Creating a fork", function() {
      it("plays the top right corner to setup the fork", function() {
      this.board._board[0] = 'X';
      this.board._board[6] = 'X';
      this.board._board[3] = 'O';
      this.board._board[8] = 'O';
      expected = 2;
      this.sut.getMove(this.board, callBack);
      });
    });
      it("plays the bottom left corner to setup the fork", function() {
      this.board._board[0] = 'X';
      this.board._board[8] = 'X';
      this.board._board[2] = 'O';
      this.board._board[4] = 'O';
      expected = 6;
      this.sut.getMove(this.board, callBack);
      });
    });
});
