const letterPositions = (require('../letterPositions'))
const chai = require('chai');
const assert = chai.assert;


describe("#letterPositions", () => {

  it("returns [2,3] for 'l' ", () => {
    assert.deepEqual(letterPositions("Hello")['l'],[2, 3]);
  });

});

