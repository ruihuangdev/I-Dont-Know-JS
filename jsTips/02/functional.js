const numbers = ["1", "2", "3", "a", "5"];

// create a new array, not removing it from the old
const notNumbers = numbers.filter(v => v === "a");
// notNumbers // ["a"]

const cleaned = notNumbers.map(v => NaN);
// notNumbers // [NaN]

// .some method
const areNotNumbers = numbers.some(v => v === "a");
// areNotNumbers // true

// .every method
const areStrings = numbers.every(v => typeof v === "string");

// .reduce method
// callback accumulate is 1st arg, current value in the loop is 2nd arg
// optional 2nd argument which is starting value to accumulate from
const aCount = numbers.reduce((acc, cur) => {
  // add 1 or 0 based on if cur is "a" or not
  return acc + (cur === "a" ? 1 : 0);
}, 0);

// .sort method
const sorted = numbers.sort((a, b) => a < b);
// sorted // ["1", "2", "3", "a", "5"]

// splice method
sorted.splice(3);
// sorted // ["1", "2", "3"]
