//tail function
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

module.exports = tail;