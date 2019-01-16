// iterators are what for...of loops use to iterate over iterables

const cats = ["cool cat", "cute cat", "silly cat"];

// for of loop calls the Symbol.iterator method on cats
const iterator = cats[Symbol.iterator]();

// iterator is expected to have a next() method
iterator.next(); // { value: 'cool cat', done: false }
iterator.next(); // { value: 'cute cat', done: false }
iterator.next(); // { value: 'silly cat', done: false }
iterator.next(); // { value: undefined, done: true }

// calling next() is what for of loop does under the hood

for (const cat of cats) {
  // the reason we can use for of loop to iterate over the array is because
  // arrays provide an iterator that tells for of loop how to iteratate it
  cat; // cool cat, cute cat, silly cat
}

// why for of? so we can iterate over other stuff
for (const char of cats[0]) {
  char; // c, o, o, l, , c, a, t,
}
