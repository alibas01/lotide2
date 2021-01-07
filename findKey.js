// assert equal function
const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}`);
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

// findKey functio
const findKey = function (object, callback) {
  let result;
  for (let key in object) {
    if (callback(object[key])) {
      result = key;
      break;
    }
  }
  return result;
}

//test code
assertEqual(
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) , "noma");

assertEqual(
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.boooo === 2) , undefined);
