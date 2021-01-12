
// find key by value function
const findKeyByValue = function(newobj, exvalue) {
  let result;
  for (let item in newobj) {
    if (newobj[item] === exvalue) {
      result = item;
    }
  }
  return result;
}

module.exports = findKeyByValue;




