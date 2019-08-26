// part of the def for HOF is returning a function from a function.
function instructionGenerator(){
  function multiplyBy2(num){
    return num*2;
  }
  return multiplyBy2;
}

let generatedFunc = instructionGenerator();

// 1. Delcare a instructionGenerator as a func
// 2. Delcare generatedFunc as undefined
// 3. generatedFunc invokes instructionGenerator to run
// 4. Create new exec context
// 5. Within local mem of instructionGenerator, decalre multiplyBy2 as a func
// 6. Within local mem of instructionGenerator, return multiplyBy2
// 7. multiplyBy2 is stored in generatedFunc, instructionGenerator call stack gets popped off
// 8. Now, in global call stack, we can call generatedFunc() to run mutliplyBy2()

let result = generatedFunc(3) //6
// 9. Declare result as a func (generatedFunc)
// 10. Within local mem of generatedFunc, declare num as 3
// 11. Within local mem of generatedFunc, return 3*2
// 12. generatedFunc call stack popped off