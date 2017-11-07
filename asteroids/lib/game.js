const Asteroid = require('./asteroid.js');
const Util = require('./util.js');

const Game = function Game(){
  this.asteroids = [];
  this.ships = [];
  this.bullets = [];

  this.addAsteroids();


};

Game.DIM_X = 1000;
Game.DIM_Y = 1000;
Game.NUM_ASTEROIDS = 50;

Game.prototype.addAsteroids = function(){
  this.asteroids = [];
  for(let i=0; i< Game.NUM_ASTEROIDS; i++){
    this.asteroids.push(new Asteroid({game: this}));
  }
};

Game.prototype.randomPosition = function(){
  Util.randomVec(Math.random()*Game.DIM_X);
};

Game.prototype.draw = function(ctx){
  ctx.clearRect(0,0,Game.DIM_X, Game.DIM_Y);
  ctx.fillRect(0,0,Game.DIM_X, Game.DIM_Y); //
  this.asteroids.forEach(el => el.draw(ctx));
};

Game.prototype.moveObjects = function(){
  this.asteroids.forEach(el => el.move());
};

module.exports = Game; 
