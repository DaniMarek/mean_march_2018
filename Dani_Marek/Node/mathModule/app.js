var mathlib = require('./mathlib')();     //notice the extra invocation parentheses!
console.log(mathlib);
console.log(mathlib.multiply(3,4));
console.log(mathlib.add(5,6));
console.log(mathlib.square(5));
console.log(mathlib.random(1,35));