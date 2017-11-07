
Function.prototype.inherits = function inherits(Superclass){
  // let subclass = this;
  function Surrogate(){}
  Surrogate.prototype = Superclass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function MovingObject(name){
  this.name = name;

}
MovingObject.prototype.test = function(){
  console.log("heloworld");
};

function Ship(name){
  MovingObject.call(this,name);
}
Ship.inherits(MovingObject);



function Asteroid(){
  Asteroid.inherits(MovingObject);
}


let s = new Ship("carl");
s.test();
