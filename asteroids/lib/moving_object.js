

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
