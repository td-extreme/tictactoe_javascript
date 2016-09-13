class AiMiniMax {

  constructor(gameRules) {
    this.rules = gameRules;
  }

  getMove(board, callBack) {
    this.currentPlayer = board.currentPlayer();
    this.nonCurrentPlayer = board.nonCurrentPlayer();
    var opponent = board.nonCurrentPlayer();
    var moves = board.availableMoves();
    var scores = new Array();
    for (var i in moves ) {
      var temp_board = board.deepCopy();
      temp_board.playMove(moves[i]);
      scores[i] = this.minimax(temp_board, 0);
    }
    callBack(moves[scores.indexOf(Math.max.apply(Math, scores))]);
  }

  minimax(board, depth) {
    if (this.rules.gameOver(board)) {
      return this.score(board, depth);
    }
    var scores = new Array();
    var moves = board.availableMoves();
    for (var i in moves) {
      var temp_board = board.deepCopy();
      temp_board.playMove(moves[i]);
      scores.push(this.minimax(temp_board, depth + 1));
    }
    return this.bestScore(scores, board.currentPlayer());
  }

  bestScore(scores, player) {
    var rtn;
    if (player === this.currentPlayer) {
      rtn = Math.max.apply(Math, scores);
    } else {
      rtn = Math.min.apply(Math, scores);
    }
    return rtn;
  }

  score(board, depth) {
   if (this.rules.winner(board) === this.currentPlayer) {
      return 100 - depth;
    } else if (this.rules.winner(board) === this.nonCurrentPlayer) {
      return depth - 100;
    } else {
      return 0 - depth;
    }
  }
}
exports.AiMiniMax = AiMiniMax;
