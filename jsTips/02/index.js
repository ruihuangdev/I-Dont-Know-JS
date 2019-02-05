const arr = ["badger", "beaver", "baboon"];

// a traditional loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// a for of loop (because arr is iterable)
for (const e of arr) {
  console.log(e);
}

// a lower level look at for of loop
arr[Symbol.iterator] = function() {
  let i = 0;
  let arr = this;
  return {
    next: function() {
      if (i >= arr.length) {
        return { done: true };
      } else {
        const value = arr[i];
        i++;
        return { value, done: false };
      }
    }
  };
};

// foreach loop
// allows us to pass in a call back function that will be executed for every item in array
arr.forEach(v => console.log(v));
