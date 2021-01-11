const eqArrays = require('./eqArrays');


// eqObjects function
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = require('./eqObjects');



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
const object = { a: '1', b: 3 };
const object1 = { b: 2, a: '1' };
assertObjectsEqual(object1, object) ;
eqObjects(object, object1)
