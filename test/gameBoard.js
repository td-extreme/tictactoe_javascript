var expect = require("chai").expect;
var gameBoard = require('../app/gameBoard');

describe("Tic Tac Toe Game Board", function() {

  beforeEach(function() {
    this.sut = new gameBoard.GameBoard(3);
  });

  describe("Making a copy of the board results in a deep copy", function() {
    describe("When playing a move on a copy of an empty board", function() {
      it("The orginal board is still blank", function() {
        boardCopy = this.sut.deepCopy();
        boardCopy.playMove(3);
        expect(this.sut.getSquare(3)).to.equal(" ");
      });
    });
    describe("When making a copy of a board that has moves played", function() {
      it("The the copy has those moves played on it as well", function() {
        this.sut.playMove(3);
        this.sut.playMove(2);
        this.sut.playMove(8);
        boardCopy = this.sut.deepCopy();
        for (var i = 0; i < boardCopy.size(); ++i) {
          expect(boardCopy.getSquare(i)).to.equal(this.sut.getSquare(i));
            }
      });
    });
  });

  describe("Creating a blank 4x4 board", function() {
    var sut4x4 = new gameBoard.GameBoard(4);
    it("when constructor is passed 4 the size is 16 ", function() {
      expect(sut4x4.size()).to.equal(16);
    });

    it("the gridSize is 4", function() {
      expect(sut4x4.rowSize()).to.equal(4);
    });

    it("all spaces are blank", function() {
      for (var i = 0; i < 16; ++i) {
        expect(sut4x4.getSquare(i)).to.equal(' ');
      }
    });
    it("Corners returns an array with 0, 3, 12, 15", function() {
      expect(sut4x4.corners()).to.deep.equal(new Array(0, 3, 12, 15));
    });
   });

  describe("Creating a blank 3x3 board", function() {
    it("when constructor is passed 3 the size is 9 ", function() {
      expect(this.sut.size()).to.equal(9);
    });

    it("the gridSize is 3", function() {
      expect(this.sut.rowSize()).to.equal(3);
    });

    it("all spaces are blank", function() {
      for (var i = 0; i < 9; ++i) {
        expect(this.sut.getSquare(i)).to.equal(' ');
      }
    });

    it("Corners returns an array with 0, 2, 6, 8", function() {
      expect(this.sut.corners()).to.deep.equal(new Array(0, 2, 6, 8));
    });
  });

  describe("Available Moves", function() {
    it("When no moves have been played remaining moves should have 4 elements", function() {
      expect(this.sut.availableMoves().length).to.equal(9);
    });
    it("After playing space 0, it should not be in the list of availableMoves", function() {
      this.sut.playMove(0);
      expect(this.sut.availableMoves()).to.deep.equal(new Array(1, 2, 3, 4, 5, 6, 7, 8));
    });
   });



  describe("Getting current and non current player", function() {
    it("When no moves have been played 'X' is the current player", function() {
      expect(this.sut.currentPlayer()).to.equal('X');
    });

    it("When no moves have been played 'O' is the non current player", function() {
      expect(this.sut.nonCurrentPlayer()).to.equal('O');
    });


    it("After a move is played 'O' is the current player", function() {
      this.sut.playMove(0);
      expect(this.sut.currentPlayer()).to.equal('O');
    });

  });


  describe("playing moves", function() {
    it("returns true if the space is ' '", function() {
      expect(this.sut.validMove(0)).to.equal(true);
    });

    it("returns false if the space has already been played", function() {
      this.sut.playMove(0);
      expect(this.sut.validMove(0)).to.equal(false);
    });

    it("returns true if move as played", function() {
      expect(this.sut.playMove(0)).to.equal(true);
    });

    it("Sets space 1 to 'X'", function() {
      this.sut.playMove(0);
      expect(this.sut.getSquare(0)).to.equal('X');
    });

    it("returns false if space is already taken", function() {
      this.sut.playMove(0);
      expect(this.sut.playMove(0)).to.equal(false);
    });

    it("Doesn't override a move if that space is taken", function() {
      this.sut.playMove(0);
      this.sut.playMove(0);
      expect(this.sut.getSquare(0)).to.equal('X');
    });
  });

  describe("board states", function() {
    it("empty returns true if all spaces are blank", function() {
      expect(this.sut.empty()).to.equal(true);
    });

    it("empty returns fasle if a move has been played", function() {
      this.sut.playMove(0);
      expect(this.sut.empty()).to.equal(false);
    });

    it("full returns fasle if there are moves still avaliable", function() {
      expect(this.sut.full()).to.equal(false);
    });

    it("full returns true if there are no moves left", function() {
      for (var i = 0; i < 9; ++i) {
        this.sut.playMove(i);
      }
      expect(this.sut.full()).to.equal(true);
    });
  });
});
