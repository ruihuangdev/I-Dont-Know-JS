const num = 3;

function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(4);
const newOutput = multiplyBy2(10);

// to track where the executaion context is, a data structure called "call stack" is used
// we start at global()
// whatever is the top of the call stack is where JS thread is running
// when multiplyBy2 is called, the multiplyBy2(4) call stack is pushed
// just like a stack data structure, the last thing to put in is the first to put out

// when multiplyBy2 finished running (we know this when return is hit)
// if return is not hit (aka implicit return), undefined is returned
// multiplyBy2(4) call stack is popped
// global stack is back on top, until
// multiplyBy2(10) call stack is pushed

// call stack lets us keep track of execution context
// also, a local execution context is also known as a variable environment
