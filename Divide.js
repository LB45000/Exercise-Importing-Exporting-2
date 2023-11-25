const _ = require('lodash');

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return _.divide(a, b);
}

module.exports = divide;
