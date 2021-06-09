// eqArrays function

const eqArrays = function(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

const eqArrays2 = function(arr1, arr2) {
 
  let booArr = [];
  let sum = 0;
  if (!arr1 || !arr2 ) {
    return false;
  }
  if (arr1.length === 0 && arr2.length === 0) {
    return true;
  }
  
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        sum +=1;
      } else {
        return false;
      }
    }
      if (sum === arr1.length) {
      return true;
    } 
  } else {
    return false;
  }
};


module.exports = { eqArrays, eqArrays2 }; 