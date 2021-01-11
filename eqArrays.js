// Assert equal function

const assertEqual = require('./assertEqual');

// eqArrays function

const eqArrays = function(arr1, arr2) {
 
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


module.exports = eqArrays; 