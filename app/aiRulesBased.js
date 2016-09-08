class AiRulesBased {

  constructor(gameRules) {
    this.rules = gameRules;
  }

  getMove (board) {
    var move = this.getGameEndingMove(board, board.currentPlayer());
    if (move === null) {
      move = this.getGameEndingMove(board, board.nonCurrentPlayer());
    }
    if (move === null) {
      move = this.getCenterMove(board);
    }
    if (move === null) {
      move = this.getCornerMove(board);
    }
    if (move === null) {
      console.log("GET RANDOM");
      move = this.getRandomMove(board);
    }
    return move;
  }

  getGameEndingMove (board, mark) {
    var moves = board.availableMoves();
    for (var i = 0; i < moves.length; ++i) {
      var move = moves[i];
      board._board[move] = mark;
      var gameOver = this.rules.winner(board);
      board._board[move] = ' ';
      if (gameOver) {
        return move;
      }
    }
    return null;
  }

  getCenterMove (board) {
    if (board.size() === 9 && board.validMove(4)) {
      return 4;
    }
    return null;
  }

  getCornerMove (board) {
    var corners = board.corners();
    var availableMoves = board.availableMoves();
    var availableCorners = [];
    for (var i = 0; i < corners.length; ++i) {
      if (availableMoves.indexOf(corners[i]) !== -1) {
        availableCorners.push(corners[i]);
      }
    }
    if (availableCorners.length === 0 ) { return null; }
    var index = Math.floor(Math.random() * availableCorners.length);
    return availableCorners[index];
  }

  getRandomMove (board) {
    var moves = board.availableMoves();
    var index = Math.floor(Math.random() * moves.length);
    return moves[index];
  }
}
exports.AiRulesBased = AiRulesBased;
