const foo = { name: "roo", age: 20, cool: true };
const bar = { name: "rar", age: 30, cool: false };
const baz = { name: "raz", age: 40, cool: true };

// normie console log
console.log(foo);
console.log(bar);
console.log(baz);

// pog console log
console.log({ foo, bar, baz });

// console log with color
console.log("%c foo bar baz", "color: orange; font-weight: bold");

// console.table, useful for an array of objects
console.table([foo, bar, baz]);

// console.time for performance benchmark
console.time("looper");

let i = 0;
while (i < 100000) {
  i++;
}

console.timeEnd("looper");

// stack trace log
const monka = () => console.trace("monkaS");
monka();
