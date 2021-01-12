
// flatten function

const flatten = function(array) {
  let result = [];
  for (let subarray of array) {
    if (Array.isArray(subarray)) {
      for (let item of subarray) {
        result.push(item);
      }
    } else {
      result.push(subarray);
    }
  }
  return result;
}

module.exports = flatten

