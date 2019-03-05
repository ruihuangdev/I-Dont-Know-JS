// calling a function

const num = 3;

function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const output = multiplyBy2(4);
const newOutput = multiplyBy2(10);

// adding parentesis invokes functions

// global memory:
// assign 3 to "num"
// assign a function to "multiplyBy2"
// assign undefined to "output"
// once a function is executed, a new execution context is created

// thread of execution
// go through the code in the function line by line
// a local memory where anything defined in the function is stored

// in this local memory:
// assign argument 4 to parameter "inputNumber"
// assign evaluated result (4*2) = 8 to "result"
// assign 8 to "output"
// this local execution context is erased

// back to global memory
// assign undefined to "newOutput"
// new local memory, repeat the cycle
