function outer() {
  // backpack
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(counter);
  }
  // end backpack

  return incrementCounter;
}

var myNewFunction = outer(); // myNewFunction = incrementCounter

myNewFunction();
// where the function is defined determines what variables the function has access to when called
// when outer is called, counter is defined to be 0
// we can think of it as we made a special bond to the immediate total surrounding live local mem
// myNewFunction isn't just a function, but a function with it's surrounding data
// when counter isn't found in myNewFunc's execution context
// it looks for it in the "backpack"

myNewFunction();
// same deal, when counter isn't found in local
// we look for counter in the backpack, and found 1
// counter now is 2

// counter is hidden inside [[scope]] of myNewFunc
// it is only accessible through function calls
// since there are referrence to this function, the vars inside doesn't get garbage collected