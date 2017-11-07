function sum(){
  let args = Array.from(arguments);
  Array.prototype.slice.call(arguments);
  let total=0;
  for(let i=0; i<args.length; i++){total+=args[i];}

  console.log(total);
  return total;
}

function sum1(...args){
  let total =0;
  args.forEach(function(el){
    total+=el;
  });

  console.log(total);
  return total;
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

Function.prototype.myBind = function(){

  let args1 = Array.from(arguments);
  Array.prototype.slice.call(arguments);

  if(typeof args1[0] === String){
    let args2 = Array.from(arguments);
    Array.prototype.slice.call(arguments);
    return () => this.apply(args1, args2);

  }else{
    let that = this;
    return function(){
      let args2 = Array.from(arguments);
      Array.prototype.slice.call(arguments);
      let args3 = args1.concat(args2);
      that.apply(args1[0], args3.slice(1));
  };

  }
};

Function.prototype.myBind1 = function(...args1){

  if(typeof args1[0] === String){
    return (...args2) => this.apply(args1, args2);

  }else{
    let that = this;
    return function(...args2){
      let args3 = args1.concat(args2);
      that.apply(args1[0], args3.slice(1));
    };
  }
};



const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// let f = markov.says.myBind(breakfast, "meow", "kush")();

markov.says.myBind1(breakfast, "meow")("Markov");
markov.says.myBind1(breakfast)("meow", "a tree");
markov.says.myBind1(breakfast, "meow", "Kush")();

const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
