// eqObjects function
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keysmatch = false;
  let valuematch = [];
  let sum = 0;
  let sum1 = 0;
  //if (eqArrays(Object.keys(object1), Object.keys(object2))) {
  let keys1 = Object.keys(object1); // keys of first object
  let keys2 = Object.keys(object2); // keys of second object
  let isequal = false; // token for object1 keys
  for (let i of keys1) {  // first loop on object1 keys
    for (let j of keys2) {  // second loop on object2 keys
      if (i === j) {  // if keys are equal
       isequal = true  // turn the token on
      }
    }
    if (isequal) { // if the token on, i has a machting value in object2 keys
      sum += 1
      isequal = false; // turn the token off
    }
  } if (sum === keys1.length) { // if the total of boolean array equals to length
      keysmatch = true;   // then all of them are matching. 
  }
  if (keysmatch) {  // if keys match
    for (let key in object1) {
      if (object1[key] === object2[key]) { // for every value of keys checked
        valuematch.push(1);    // matching values adds one more 1
      }
    }
  }
  for (let item of valuematch) {
    sum1 += item;
  }
  if (sum1 > 0 && sum1 === Object.keys(object1).length) { // if total of array equals length
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
