// eqArrays function

const eqArrays = require('./eqArrays');

// assertArraysEqual function

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Assertion Passed:");
  } else {
    console.log("Assertion Failed:");
  }
};

module.exports = assertArraysEqual;

