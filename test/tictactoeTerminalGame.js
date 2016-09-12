var expect = require('chai').expect;
var mockPlayer = require('./mockPlayer');
var mockRules = require('./mockRules');
var mockBoard = require('./mockBoard');
var mockWrapperIO = require('./mockWrapperIO');
var io = require('../app/gameIO');
var board = require('../app/gameBoard');
var sut = require('../app/tictactoeTerminalGame');

describe("Tic Tac Toe Terminal Game", function() {

   beforeEach(function() {
     this.mockPlayer1 = new mockPlayer.MockPlayer();
     this.mockPlayer2 = new mockPlayer.MockPlayer();
     this.mockRules = new mockRules.MockRules();
     this.mockBoard = new mockBoard.MockBoard();
     this.key = new board.GameBoard(3);
     this.mockWrapperIO = new mockWrapperIO.MockWrapperIO();
     this.io = new io.GameIO(this.mockWrapperIO);
     this.sut = new sut.TicTacToeTerminalGame(this.mockPlayer1, this.mockPlayer2, this.mockBoard, this.key, this.mockRules, this.io);
  });

  describe("Starting the game", function() {
    it("Fills in the board used as a key", function() {
      this.sut.setUpLegend();
      for (var i in this.key._board) {
        expect(this.key.getSquare(i)).to.equal(i);
      }
    });
  });

  describe("Getting a move", function() {
    it("Calls getMove on player1 when currentPlayer is X", function() {
      this.mockBoard.setCurrentPlayer('X');
      this.sut.getMove();
      expect(this.mockPlayer1.getMoveWasCalled()).to.equal(true);
    });
    it("Does NOT call getMove on player2 when currentPlayer is X", function() {
      this.mockBoard.setCurrentPlayer('X');
      this.sut.getMove();
      expect(this.mockPlayer2.getMoveWasCalled()).to.equal(false);
    });
    it("Calls getMove on player2 when currentPlayer is O", function() {
      this.mockBoard.setCurrentPlayer('O');
      this.sut.getMove();
      expect(this.mockPlayer2.getMoveWasCalled()).to.equal(true);
    });
    it("Does NOT call getMove on player1 when currentPlayer is O", function() {
      this.mockBoard.setCurrentPlayer('O');
      this.sut.getMove();
      expect(this.mockPlayer1.getMoveWasCalled()).to.equal(false);
    });
  });

  describe("The game is over", function() {
    describe("The game ends in a tie", function() {
      it("sends 'Tied Game!' to io for output", function() {
        this.mockRules.setTiedGame(true);
        this.sut.gameOver();
        expect(this.mockWrapperIO.getOutput()).to.equal("Tied Game!");
      });
    });
    describe("The game does not end in a tie ", function() {
      it("sends 'The winner is X' to io for output", function() {
        this.mockRules.setTiedGame(false);
        this.mockRules.setWinner('X');
        this.sut.gameOver();
        expect(this.mockWrapperIO.getOutput()).to.equal("The winner is X");
      });
      it("sends 'The winner is O' to io for output", function() {
        this.mockRules.setTiedGame(false);
        this.mockRules.setWinner('O');
        this.sut.gameOver();
        expect(this.mockWrapperIO.getOutput()).to.equal("The winner is O");
      });
    });
  });

});
