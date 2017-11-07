const Game = require('./game.js');

const GameView = function(game, ctx){
  this.ctx = ctx;
  this.game = game;

};

GameView.prototype.start = function(){
  setInterval(this.game.moveObjects(), 20 );
  setInterval(this.game.draw(), 20 );
};
