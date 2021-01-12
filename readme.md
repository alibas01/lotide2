# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @futureee/lotide`

**Require it:**

`const _ = require('@futureee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: returns the first element of an array.
* `function2(tail)`: returns all array except first element.
* `function3(middle)`: returns the middle one or two elements depending on having an odd or even length.
* `function4(flatten)`: returns a smooth rray.
* `function5(countOnly)`: counts only specified chars.
* `function6(letterPositions)`: returns an object with positions.
* `function7(findKeyByValue)`: Find the key of rquesed value.
* `function8(eqObjects)`: Checks if the objects equal.
* `function9(eqArrays)`: Checks idf the arrays equal.
