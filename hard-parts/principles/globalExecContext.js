// what happens when JS executes (runs) this code?
const num = 3;

function multiplyBy2(inputNumber) {
  const result = inputNumber * 2;
  return result;
}

const name = "will";

// global memory:
// assign 3 to num
// assign a function to multiplyBy2
// assign "will" to name

// the thread will not go inside function because it is not called

// As soon as we start running our code, we create a global execution context
// thread of execution: parsing and executing the code line by line
// creating memory for every piece of data

// single threaded
// synchronous execution
