const assertEqual = require('../assertEqual');
const chai = require('chai');
const assert = chai.assert;


//TEST CODE
describe("#assertEqual", () => {
  it("returns false for 'Lighthouse Labs', 'Bootcamp'", () => {
    let result = assertEqual("Lighthouse Labs", "Bootcamp");
    console.log(result);
    assert.strictEqual(result, 'Failed');
  });
  it("returns true for '1', '1'", () => {
    let result = assertEqual(1, 1);
    assert.strictEqual(result, "Passed");
  });
 });
