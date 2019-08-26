function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(counter);
  }

  return incrementCounter;
}

var myNewFunction = outer(); // myNewFunction = incrementCounter

myNewFunction();
// inside myNewFunc's exec context:
// myNewFunc call stack gets pop in
// we now run into a problem?
// there is no counter in this stack
// there is also no counter in the global stack
// what happens now?