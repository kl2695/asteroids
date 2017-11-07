/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {



const Util = {
  inherits (childClass, parentClass) {
      // let subclass = this;
      childClass.prototype = Object.create(parentClass.prototype);
      childClass.prototype.constructor = childClass;
    },

    // Scale the length of a vector by the given amount.
    scale (vec, m) {
      return [vec[0] * m, vec[1] * m];
    },


    // Return a randomly oriented vector with the given length.
    randomVec (length) {
      const deg = 2 * Math.PI * Math.random();
      return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    }



};

module.exports = Util;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(2);
const GameView = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./game_view\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = Game.DIM_X;
  canvasEl.height = Game.DIM_Y;

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  new GameView(game, ctx).start();
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(3);
const Util = __webpack_require__(0);

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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(0);
const MovingObject = __webpack_require__(4);

const DEFAULTS = {
  COLOR: "#a70a5b",
  RADIUS: 25,
  SPEED: 4
};
const Asteroid = function Asteroid(options = {}) {
  options.color = DEFAULTS.COLOR;
  options.pos = options.pos || options.game.randomPosition();
  options.radius = DEFAULTS.RADIUS;
  options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);

  MovingObject.call(this, options);
};

Util.inherits(Asteroid, MovingObject);

Asteroid.COLOR = '#a70a5b';
Asteroid.RADIUS = '10px';
Asteroid.SPEED = 4;

module.exports = Asteroid;


/***/ }),
/* 4 */
/***/ (function(module, exports) {



const MovingObject = {
  constructor(opts){
    this.pos = opts.pos;
    this.vel = opts.vel;
    this.radius = opts.radius;
    this.color = opts.color;

  },

  draw(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fill();
  },

  move(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  }

};
module.exports = MovingObject;


/***/ })
/******/ ]);