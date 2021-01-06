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
  let isequalarr = [];
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


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(obj1)} !== ${inspect(obj2)}`);
  }
};

// test code
const object = { a: '1', b: 2 };
const object1 = { b: 2, a: '1' };
assertObjectsEqual(object1, object) ;
