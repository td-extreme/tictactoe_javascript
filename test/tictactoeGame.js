var expect = require('chai').expect;
var mockRules = require('./mockRules');
var mockBoard = require('./mockBoard');

var sut = require('../app/tictactoeGame');

describe("Tic Tac Toe Game", function() {

  beforeEach(function() {
    this.mockRules = new mockRules.MockRules();
    this.mockBoard = new mockBoard.MockBoard();
    this.sut = new sut.TicTacToeGame(this.mockBoard, this.mockRules);
   });

  describe("Game States", function() {
    describe("When the game is not over", function() {
      it("gameState should return 'playing'", function() {
          this.mockRules.setGameOver(false);
          expect(this.sut.gameState()).to.equal('playing');
      });
    });
    describe("When the game is over", function() {
      it("gameState should return 'tied' if there is no winner", function() {
        this.mockRules.setGameOver(true);
        this.mockRules.setTiedGame(true);
        expect(this.sut.gameState()).to.equal('tied');
      });
      it("gameState shoudl return 'X' if the winner is 'X'", function() {
        this.mockRules.setGameOver(true);
        this.mockRules.setWinner('X');
        expect(this.sut.gameState()).to.equal('X');
      });
      it("gameState shoudl return 'O' if the winner is 'O'", function() {
        this.mockRules.setGameOver(true);
        this.mockRules.setWinner('O');
        expect(this.sut.gameState()).to.equal('O');
      });
    });
  });
  describe("Playing a move", function() {
    it("calls the playMove function of the gameBoard class", function() {
      this.mockBoard.setValidMove(1, true);
      this.sut.playMove(1);
      expect(this.mockBoard.playMoveWasCalled()).to.equal(true);
    });
    it("playMove returns true if the move was a valid move", function() {
      this.mockBoard.setValidMove(1, true);
      expect(this.sut.playMove(1)).to.equal(true);
    });
    it("playMove returns false if the move was a valid move", function() {
      this.mockBoard.setValidMove(1, false);
      expect(this.sut.playMove(1)).to.equal(false);
    });
  });
  describe("Getting the current game board", function() {
    it("returns the current game board objects", function() {
      expect(this.sut.getBoard()).to.equal(this.mockBoard);
    });
  });
});
