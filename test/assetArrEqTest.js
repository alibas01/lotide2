const assertArraysEqual = require('../assertArraysEqual')

let A = [1,2,3];
let B = [1,2,3,3];
let C = ['1',2,3];
let D = ["1", "2", "3"];
let E = ["1", "2", "3"];


assertArraysEqual(A, B);
assertArraysEqual(A, C);
assertArraysEqual(D, E);
assertArraysEqual(D, A);
assertArraysEqual(B, C);