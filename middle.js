// ACTUAL FUNCTION
const middle = function(array) {
  const midIndex = Math.floor(array.length/2);
  let result = [];
  if (array.length % 2 === 0 && array.length > 2) {
    result = array.slice(midIndex - 1, midIndex + 1);
  } else if (array.length % 2 === 1 && array.length > 2) {
    result = [array[midIndex]];
  } else {
    result = [];
  }
  return result;
}


module.exports = middle;