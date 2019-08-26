function copyArrayAndMultiplyBy2(array) {
// first line, we are declaring / defining a function
// storing the funciton in the memory under the label
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] * 2);
  }
  return output;
}

const myArray = [1, 2, 3];
// here's where js goes after first line, since the function was not invoked.
let result = copyArrayAndMultiplyBy2(myArray);
// assign the output of the function to result
// result doesn't care about the fuction
// it only cares about what the function evaluates to after myArray is passed in