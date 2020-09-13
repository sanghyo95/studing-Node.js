var module = require('./module.js');
var calc = require('./calc');

console.log("Abs(-273) : " + module.abs(-273));
console.log('circleArea(3) = %d' + module.circleArea(3));
console.log("add (1+1) : " + calc.add(1,1));
console.log("multiply 5 * 10 : "+ calc.mutiply(5,10));