function curriedSum(n){
  let numbers = [];

  function _curriedSum(m){
    numbers.push(m);
    console.log(numbers);
    if (numbers.length === n){
      let sum = 0;
      for(let i=0; i<numbers.length; i++){sum+=numbers[i];}
      console.log(sum);
      return sum;
    }else{
      console.log(_curriedSum);
      return _curriedSum;
    }
  }

  return _curriedSum;
}

Function.prototype.curry = function(numArgs){
  let args = [];
  let that = this;

  function _curry(arg){
    args.push(arg);
    console.log(args);
    if (args.length === numArgs){
      console.log(that);
      // that.apply(null, args);
      that(...args);
    }else{
      return _curry;
    }
  }

  return _curry;
};

const sum = curriedSum(4);
sum(5);
sum(30);
sum(20);
sum(1);

let f = function(num1,num2,num3){
  let total = 0;
  total = num1 + num2 + num3;
  console.log(total);
  return total;
};

let temp = f.curry(3);
temp(1);
temp(2);
temp(3);
