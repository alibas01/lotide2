const findKeyByValue = (require('../findKeyByValue'))
const chai = require('chai');
const assert = chai.assert;

describe("#findKeyByValue", () => {

  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it("returns drama for The Wire ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns drama for The Wire ", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});
