var expect = require("chai").expect;
var gameRules = require('../app/gameRules');
var gameBoard = require('../app/gameBoard');

describe("Tic Tac Toe Game Rules", function() {

  beforeEach(function() {
    this.board = new gameBoard.GameBoard(3);
    this.board4x4 = new gameBoard.GameBoard(4);
    this.sut = new gameRules.GameRules();
  });

  describe("Finding a winner", function() {
    describe("For a 3x3 board", function() {
      it("returns false on an empty board", function() {
        expect(this.sut.winner(this.board)).to.equal(false);
      });
      describe("For 3 in a row", function() {
        it("returns 'X' when first row is all 'X'", function() {
          this.board.playMove(0);
          this.board.playMove(8);
          this.board.playMove(1);
          this.board.playMove(4);
          this.board.playMove(2);
          expect(this.sut.winner(this.board)).to.equal('X');
        });

        it("returns 'X' when second row is all 'X'", function() {
          this.board.playMove(3);
          this.board.playMove(8);
          this.board.playMove(4);
          this.board.playMove(0);
          this.board.playMove(5);
          expect(this.sut.winner(this.board)).to.equal('X');
        });
        it("returns 'X' when third row is all 'X'", function() {
          this.board.playMove(6);
          this.board.playMove(1);
          this.board.playMove(7);
          this.board.playMove(0);
          this.board.playMove(8);
          expect(this.sut.winner(this.board)).to.equal('X');
        });
      });
      describe("For 3 in a col", function() {
        it("returns 'X' when first col is all 'X'", function() {
          this.board.playMove(0);
          this.board.playMove(8);
          this.board.playMove(3);
          this.board.playMove(4);
          this.board.playMove(6);
          expect(this.sut.winner(this.board)).to.equal('X');
        });

        it("returns 'X' when second col is all 'X'", function() {
          this.board.playMove(1);
          this.board.playMove(8);
          this.board.playMove(4);
          this.board.playMove(0);
          this.board.playMove(7);
          expect(this.sut.winner(this.board)).to.equal('X');
        });
        it("returns 'X' when third col is all 'X'", function() {
          this.board.playMove(2);
          this.board.playMove(1);
          this.board.playMove(5);
          this.board.playMove(0);
          this.board.playMove(8);
          expect(this.sut.winner(this.board)).to.equal('X');
        });
      });
      describe("For 3 diagnol ", function() {
        it("returns 'X' when diagnol descending are all 'X'", function() {
          this.board.playMove(0);
          this.board.playMove(1);
          this.board.playMove(4);
          this.board.playMove(3);
          this.board.playMove(8);
          expect(this.sut.winner(this.board)).to.equal('X');
        });

        it("returns 'X' when diagnol ascending are all 'X'", function() {
          this.board.playMove(2);
          this.board.playMove(8);
          this.board.playMove(4);
          this.board.playMove(0);
          this.board.playMove(6);
          expect(this.sut.winner(this.board)).to.equal('X');
        });
     });
    });

    describe("For a 4x4 board", function() {
      describe("For 4 in a row", function() {
        it("returns 'X' when first row is all 'X'", function() {
          this.board4x4.playMove(12);
          this.board4x4.playMove(0);
          this.board4x4.playMove(8);
          this.board4x4.playMove(1);
          this.board4x4.playMove(6);
          this.board4x4.playMove(2);
          this.board4x4.playMove(11);
          this.board4x4.playMove(3);
          expect(this.sut.winner(this.board4x4)).to.equal('X');
        });

        it("returns 'X' when second row is all 'X'", function() {
          this.board4x4.playMove(3);
          this.board4x4.playMove(4);
          this.board4x4.playMove(1);
          this.board4x4.playMove(5);
          this.board4x4.playMove(0);
          this.board4x4.playMove(6);
          this.board4x4.playMove(11);
          this.board4x4.playMove(7);

          expect(this.sut.winner(this.board4x4)).to.equal('X');
        });
        it("returns 'X' when third row is all 'X'", function() {
          this.board4x4.playMove(4);
          this.board4x4.playMove(8);
          this.board4x4.playMove(7);
          this.board4x4.playMove(9);
          this.board4x4.playMove(1);
          this.board4x4.playMove(10);
          this.board4x4.playMove(0);
          this.board4x4.playMove(11);
          expect(this.sut.winner(this.board4x4)).to.equal('X');
        });
        it("returns 'X' when fourth row is all 'X'", function() {
          this.board4x4.playMove(4);
          this.board4x4.playMove(12);
          this.board4x4.playMove(7);
          this.board4x4.playMove(13);
          this.board4x4.playMove(1);
          this.board4x4.playMove(14);
          this.board4x4.playMove(0);
          this.board4x4.playMove(15);
          expect(this.sut.winner(this.board4x4)).to.equal('X');
        });
      });
      describe("For 4 in a col", function() {
        it("returns 'X' when first col is all 'X'", function() {
          this.board4x4.playMove(13);
          this.board4x4.playMove(0);
          this.board4x4.playMove(2);
          this.board4x4.playMove(4);
          this.board4x4.playMove(6);
          this.board4x4.playMove(8);
          this.board4x4.playMove(11);
          this.board4x4.playMove(12);
          expect(this.sut.winner(this.board4x4)).to.equal('X');
        });

        it("returns 'X' when second col is all 'X'", function() {
          this.board4x4.playMove(3);
          this.board4x4.playMove(1);
          this.board4x4.playMove(4);
          this.board4x4.playMove(5);
          this.board4x4.playMove(0);
          this.board4x4.playMove(9);
          this.board4x4.playMove(11);
          this.board4x4.playMove(13);

          expect(this.sut.winner(this.board4x4)).to.equal('X');
        });
        it("returns 'X' when third col is all 'X'", function() {
          this.board4x4.playMove(4);
          this.board4x4.playMove(2);
          this.board4x4.playMove(9);
          this.board4x4.playMove(6);
          this.board4x4.playMove(1);
          this.board4x4.playMove(10);
          this.board4x4.playMove(0);
          this.board4x4.playMove(14);
          expect(this.sut.winner(this.board4x4)).to.equal('X');
        });
        it("returns 'X' when fourth col is all 'X'", function() {
          this.board4x4.playMove(4);
          this.board4x4.playMove(3);
          this.board4x4.playMove(2);
          this.board4x4.playMove(7);
          this.board4x4.playMove(1);
          this.board4x4.playMove(11);
          this.board4x4.playMove(0);
          this.board4x4.playMove(15);
          expect(this.sut.winner(this.board4x4)).to.equal('X');
        });
      });
      describe("For 4 diagnol ", function() {
        it("returns 'X' when diagnol descending are all 'X'", function() {
          this.board4x4.playMove(4);
          this.board4x4.playMove(0);
          this.board4x4.playMove(1);
          this.board4x4.playMove(5);
          this.board4x4.playMove(3);
          this.board4x4.playMove(10);
          this.board4x4.playMove(8);
          this.board4x4.playMove(15);

          expect(this.sut.winner(this.board4x4)).to.equal('X');
        });

        it("returns 'X' when diagnol ascending are all 'X'", function() {
          this.board4x4.playMove(2);
          this.board4x4.playMove(3);
          this.board4x4.playMove(1);
          this.board4x4.playMove(6);
          this.board4x4.playMove(4);
          this.board4x4.playMove(9);
          this.board4x4.playMove(6);
          this.board4x4.playMove(12);
          expect(this.sut.winner(this.board4x4)).to.equal('X');
          expect(this.sut.winner(this.board4x4)).to.equal('X');
        });
     });

    });
  });
});
