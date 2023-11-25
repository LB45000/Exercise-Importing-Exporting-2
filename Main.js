const subtract = require('./Subtract');
const multiply = require('./Multiply');
const divide = require('./Divide');

const resultSubtract = subtract(10, 5);
const resultMultiply = multiply(2, 3);
const resultDivide = divide(6, 2);

console.log('Subtract:', resultSubtract);
console.log('Multiply:', resultMultiply);
console.log('Divide:', resultDivide);
