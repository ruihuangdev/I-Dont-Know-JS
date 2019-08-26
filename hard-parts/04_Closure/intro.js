// When a function is called, we create a live store of data for that function's execution context
// example, in copyArrayManipulate, arg array becomes [1, 2, 3]
// This local memory is known as variable environment in JS

// When the function finishes executing, it's local memory is deleted (garbage collected), except for the returned value
// What if a function could hold on to data/state between executions?
// This can be very useful, it would let our functions defs have an associated memory
// it starts with returning a function from a function