// assert equal function
const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}`);
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

// count letters function
const countLetters = function(textx) {
  const text = textx.split(' ').join('');
  const result = {};
  for (let char of text) {
    if (result[char] === undefined) {
      result[char] = 0;
    }
    result[char] += 1;
  }
  return result;
}

console.log (countLetters("lighthouse in the house"));
