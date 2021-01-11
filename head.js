// const assertEqual = function(actual, expected) {
//   console.assert(actual === expected, `${actual} !== ${expected}`);
//   if (actual === expected) {
//     console.log(`Assertion Passed: ${actual} === ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');

const head = function(subarray) {
  do {return subarray[0]}
  while (subarray!==[]);
}


module.exports = head;
