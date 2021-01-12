const countOnly = (require('../countOnly'))
const chai = require('chai');
const assert = chai.assert;


// Test code

describe("#countOnly", () => {

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it("returns 2 for Fang", () => {
    assert.strictEqual(result1['Fang'], 2);
  });

  it("returns 2 for Fang", () => {
    assert.strictEqual(result1['Jason'], 1);
  });

  it("returns 2 for Fang", () => {
    assert.strictEqual(result1['Karima'], undefined);
  });

});