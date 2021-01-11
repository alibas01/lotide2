const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');
const chai = require('chai');
const assert = chai.assert;

// test code

describe("#eqObjects", () => {
  it("returns true for ab ba", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.strictEqual(eqObjects(ab, ba), true);
  });
  it("returns false for ab abc", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.strictEqual(eqObjects(ab, abc), false);
  });
 
});