const assertEqual = function(actual, expected) {
  console.assert(actual === expected, `${actual} !== ${expected}`);
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
};

const tail = function(subarray) {
  let result = [];
  for (let i = 0; i < subarray.length; i++) {
    if (i !== 0) {
      result.push(subarray[i]);
    } else {
      continue;
    }
  }
  return result;
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

console.log(tail([]));
console.log(tail(words));