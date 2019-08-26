function copyArrayAndManipulate(array, instructions) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i] * 2));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}

const myArray = [1, 2, 3];
let result = copyArrayAndManipulate(myArray, multiplyBy2);
// result = copyArrayAndManipulate([1, 2, 3], function)

// within this execution context:
// array: [1, 2, 3]
// instructions: multiplyBy2(function)
// within this execution context, you run instructions(1) for multiplyBy2(2);

// within multiplyBy2 execution context,
// input = array[1];

// we could generalize the previous function by passing the array element action as the second argument
// first we declare copyArrayAndMunipulate(function)
// then we declare multiplyBy2(function)
