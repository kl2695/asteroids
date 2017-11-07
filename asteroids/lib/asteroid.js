const Util = require('./util.js');
const MovingObject = require('./moving_object.js');

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
