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

// ACTUAL FUNCTION
const middle = function(array) {
  const midIndex = Math.floor(array.length/2);
  let result = [];
  if (array.length % 2 === 0 && array.length > 2) {
    result = array.slice(midIndex - 1, midIndex + 1);
  } else if (array.length % 2 === 1 && array.length > 2) {
    result = [array[midIndex]];
  } else {
    result = [];
  }
  return result;
}


// Test code
let  test = [
middle([1]), // => []
middle([1, 2]), // => []
middle([1, 2, 3]), // => [2]
middle([1, 2, 3, 4, 5]), // => [3]
middle([1, 2, 3, 4]), // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
]
for (let func of test) {
  console.log(func);
};