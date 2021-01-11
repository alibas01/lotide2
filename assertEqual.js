// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //console.assert(actual === expected, `${actual} !== ${expected}`);
  if (actual === expected) {
    return "Passed";
  } else {
    return 'Failed';
  }
};


module.exports = assertEqual;