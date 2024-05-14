"use strict"

console.log("hello from inside variables.js");

let price = 100;

price = 150;

console.log(price);

const number = 42;
// const doesnt let you change the value of the variables, you would use const if you want the work to stay consistent
number = 10;
console.log(number);

var x = 2;
// one reason to to use var as best practice is due to not always getting a error message 
x = 25
console.log(x);