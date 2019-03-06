// let's create a function 10 squared
// takes no input, returns 10*10

function tenSquared() {
  return 10 * 10;
}
tenSquared();

// what about 9 squared? 2000 squared?
// DRY

function numSquared(num) {
  return num * num;
}
numSquared(9);
numSquared(2000);

// this is the very essence of why we have higher order functions
// num is a placeholder, as we do not know what to put there until the function is called
// similarly, we can put some functionality as a placeholder
