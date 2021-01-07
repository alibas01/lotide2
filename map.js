// eqArrays function

const eqArrays = function(arr1, arr2) {
  let booArr = [];
  let sum = 0;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        booArr.push(1);
      } else {
        booArr.push(0);
      }
    }
    for (let item of booArr) {
      sum += item;
    }
    if (sum !== arr1.length) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

// assertArraysEqual function

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// callback function
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);