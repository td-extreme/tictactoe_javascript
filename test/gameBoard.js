var expect = require("chai").expect;
var gameBoard = require('../app/gameBoard');


describe("Tic Tac Toe Game Board", function() {

  describe("Creating a blank 4x4 board", function() {
    var sut = new gameBoard.GameBoard(4);
    it("when constructor is passed 4 the size is 16 ", function() {
      expect(sut.size()).to.equal(16);
    });

    it("the gridSize is 4", function() {
      expect(sut.rowSize()).to.equal(4);
    });

    it("all spaces are blank", function() {
      for (var i = 0; i < 16; ++i) {
        expect(sut.getSquare(i)).to.equal(' ');
      }
    });
    it("Corners returns an array with 0, 3, 12, 15", function() {
      expect(sut.corners()).to.deep.equal(new Array(0, 3, 12, 15));
    });
   });

  describe("Creating a blank 3x3 board", function() {
    var sut = new gameBoard.GameBoard(3);
    it("when constructor is passed 3 the size is 9 ", function() {
      expect(sut.size()).to.equal(9);
    });

    it("the gridSize is 3", function() {
      expect(sut.rowSize()).to.equal(3);
    });

    it("all spaces are blank", function() {
      for (var i = 0; i < 9; ++i) {
        expect(sut.getSquare(i)).to.equal(' ');
      }
    });

    it("Corners returns an array with 0, 2, 6, 8", function() {
      expect(sut.corners()).to.deep.equal(new Array(0, 2, 6, 8));
    });
  });

  describe("Available Moves", function() {
    var sut = new gameBoard.GameBoard(2);
    it("When no moves have been played remaining moves should have 4 elements", function() {
      expect(sut.availableMoves().length).to.equal(4);
    });
    it("After playing space 0, it should not be in the list of availableMoves", function() {
      sut.playMove(0);
      expect(sut.availableMoves()).to.deep.equal(new Array(1, 2, 3));
    });
   });



  describe("Switching players", function() {
    var sut = new gameBoard.GameBoard(3);
    it("When no moves have been played 'X' is the current player", function() {
      expect(sut.currentPlayer()).to.equal('X');
    });

    it("After a move is played 'O' is the current player", function() {
      sut.playMove(0);
      expect(sut.currentPlayer()).to.equal('O');
    });

  });


  describe("playing moves", function() {
    var sut = new gameBoard.GameBoard(3);

    it("returns true if the space is ' '", function() {
      expect(sut.validMove(8)).to.equal(true);
    });

    it("returns false if the space has already been played", function() {
      sut.playMove(8);
      expect(sut.validMove(8)).to.equal(false);
    });

    it("returns true if move as played", function() {
      expect(sut.playMove(0)).to.equal(true);
    });

    it("Sets space 1 to 'X'", function() {
      sut.playMove(1);
      expect(sut.getSquare(1)).to.equal('X');
    });

    it("returns false if space is already taken", function() {
      sut.playMove(2);
      expect(sut.playMove(2)).to.equal(false);
    });

    it("Doesn't override a move if that space is taken", function() {
      sut.playMove(3);
      sut.playMove(3);
      expect(sut.getSquare(3)).to.equal('X');
    });
  });

  describe("board states", function() {
    var sut = new gameBoard.GameBoard(2);
    it("empty returns true if all spaces are blank", function() {
      expect(sut.empty()).to.equal(true);
    });

    it("empty returns fasle if a move has been played", function() {
      sut.playMove(0);
      expect(sut.empty()).to.equal(false);
    });

    it("full returns fasle if there are moves still avaliable", function() {
      expect(sut.full()).to.equal(false);
    });

    it("full returns true if there are no moves left", function() {
      sut.playMove(1);
      sut.playMove(2);
      sut.playMove(3);
      expect(sut.full()).to.equal(true);
    });
  });


});
