function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
  }

  incrementCounter();
}

outer();

// where you define the functions determines what variables your function have access to when you call the funciton
// 1. Declare outer as a func in global call stack
// 2. outer is invoked, create a exec context
// 3. any funcs or vars declared in outer is stored in the exec context of outer
// 4. Within outer exec context, declare counter = 0
// 5. Within outer exec context, declare incrementCounter as a func
// 6. Within outer exec context, invoke incrementCounter
// 7. Within incerementCounter exec context, counter++
// 8. JS look for counter in incrementCounter exec context
// 9. not finding it, JS look for counter in outer exec context
// 10. incrementCounter exec finishes, call stack popped off
// 11. outer call stack popped off

// however, what if we do this:
incrementCounter();
// undefined
