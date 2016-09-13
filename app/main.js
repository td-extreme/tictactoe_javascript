var gridSize = 3;

var wrapperIO = require('./wrapperIO');
var gameIO = require('./gameIO');
var gameBoard = require('./gameBoard');
var gameBoardOutputFormatter = require('./gameBoardOutputFormatter');
var gameRules = require('./gameRules');
var aiRulesBased = require('./aiRulesBased');
var humanPlayer = require('./humanPlayer');
var tictactoeTerminalGame = require('./tictactoeTerminalGame');


var wrapper = new wrapperIO.WrapperIO();
var io = new gameIO.GameIO(wrapper);
var rules = new gameRules.GameRules();
var board = new gameBoard.GameBoard(gridSize);
var gameBoardFormatter = new gameBoardOutputFormatter.GameBoardOutputFormatter();
var key = new gameBoard.GameBoard(gridSize);
var ai = new aiRulesBased.AiRulesBased(rules);
var human = new humanPlayer.HumanPlayer(io);
var tttGame = new tictactoeTerminalGame.TicTacToeTerminalGame(human, ai, board, key, rules, io, gameBoardFormatter)

tttGame.startGame();


