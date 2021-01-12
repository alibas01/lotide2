// letter Positions function
const letterPositions = function(sentence) {
  const text = sentence.split(' ').join('');
  const result = {};
  for (let i = 0; i < text.length; i++) {
    if (result[text[i]] === undefined) {
      result[text[i]] = [];
    }
    result[text[i]].push(i);
  }
  return result;
};

module.exports = letterPositions

