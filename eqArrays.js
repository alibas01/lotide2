// Assert equal function

const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}`);
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

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


console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS