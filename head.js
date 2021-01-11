const assertEqual = require('./assertEqual');

const head = function(subarray) {
  do {return subarray[0]}
  while (subarray!==[]);
}


module.exports = head;
