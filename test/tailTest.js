const assertEqual = (require('../assertEqual'))
const tail = (require('../tail'))
const chai = require('chai');
const assert = chai.assert;


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello','Lighthouse','Labs']", () => {
    const result = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(result), ["Lighthouse", "Labs"]);
  });
});