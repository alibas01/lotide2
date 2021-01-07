// ssert equal function
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

// eqObjects function
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keysmatch = false;
  let valuematch = [];
  let sum = 0;
  let sum1 = 0;
  //if (eqArrays(Object.keys(object1), Object.keys(object2))) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let isequal = false;
  //let isequalarr = [];
  for (let i of keys1) {
    for (let j of keys2) {
      if (i === j) {
       isequal = true
      }
    }
    if (isequal) {
      sum += 1
      isequal = false;
    }
  } if (sum === keys1.length) {
      keysmatch = true;
  }
  if (keysmatch) {
    for (let key in object1) {
      if (object1[key] === object2[key]) {
        valuematch.push(1);
      }
    }
  }
  for (let item of valuematch) {
    sum1 += item;
  }
  if (sum1 > 0 && sum1 === Object.keys(object1).length) {
    return true;
  } else {
    return false;
  }
};



// test code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false