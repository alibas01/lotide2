
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let result = {};
  let num = 0;
  for (let i in itemsToCount) {
    for (let j of allItems) {
      if (itemsToCount[i] && i === j) {
        num ++;
        result[i] = num;
      }
    }
    num = 0;
  }
  return result;
};

module.exports = countOnly;


