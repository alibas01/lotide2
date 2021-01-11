const chai = require('chai');
const assert = chai.assert;

// assertArraysEqual function
const assertArraysEqual = require('../assertArraysEqual');

// eqArrays function
const eqArrays = require('../eqArrays');

// middle function
const middle = require('../middle');

// Test code
// let  test = [
//   middle([1]), // => []
//   middle([1, 2]), // => []
//   middle([1, 2, 3]), // => [2]
//   middle([1, 2, 3, 4, 5]), // => [3]
//   middle([1, 2, 3, 4]), // => [2, 3]
//   middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
//   ]
//   let testResult = [[],[],[2],[3],[2,3],[3,4]];
//   // for (let func of test) {
//   //   testResult.push(func);
//   // };
  
//   for (let i = 0; i < test.length; i++) {
//     assertArraysEqual(test[i],testResult[i]);
//     console.log(eqArrays(test[i],testResult[i]));
//   }

  describe("#middle", () => {
    it("returns [] for [1, 2]", () => {
      assert.deepEqual(middle([1, 2]), []);
    });
    it("returns [2] for [1, 2, 3]", () => {
      assert.deepEqual(middle([1, 2, 3]), [2]);
    });
    it("returns [3] for [1, 2, 3, 4, 5]", () => {
      assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
    });
    it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
      assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
    });
   
  });