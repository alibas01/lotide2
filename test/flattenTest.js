const flatten = (require('../flatten'))
const chai = require('chai');
const assert = chai.assert;

describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    const testArr = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(testArr), [1, 2, 3, 4, 5, 6]);
  });
});