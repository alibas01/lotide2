// ssert equal function
const assertEqual = require('./assertEqual');
// eqArrays function

const eqArrays = require('./eqArrays');

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
  } if (sum === keys1.length && sum === keys2.length) {
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


module.exports = eqObjects;