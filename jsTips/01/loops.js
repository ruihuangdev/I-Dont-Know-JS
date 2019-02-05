const orders = [400, 30, 100, 50, 643];

// normie way to do loops
let total = 0;
const withTax = [];
const highValue = [];
for (i = 0; i < orders.length; i++) {
  // reduce
  total += orders[i];

  // map
  withTax.push(orders[i] * 1.1);

  // filter
  if (orders[i] > 100) {
    highValue.push(orders[i]);
  }
}
// this code is kinda ugly, but also mutating values that we might not want to

// pog loops
// to add, use reduce, which takes a callback with accumulated and current values
const total2 = orders.reduce((acc, cur) => acc + cur);

// map
const withTax2 = orders.map(val => val * 1.1);

// filter
const highValue2 = orders.filter(val => val > 100);
