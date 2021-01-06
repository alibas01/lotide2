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

// letter Positions function
const letterPositions = function(sentence) {
  const text = sentence.split(' ').join('');
  const result = {};
  for (let i = 0; i < text.length; i++) {
    if (result[text[i]] === undefined) {
      result[text[i]] = [];
    }
    result[text[i]].push(i);
  }
  return result;
};
// test code
assertArraysEqual(letterPositions("Hello").l,[2, 3]);
console.log(letterPositions('Hello'));