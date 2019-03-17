document.getElementById("app").innerHTML = `
<h1>Hello Parcel</h1>
<div>
  Look
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;

// function declaration
// Declaration is hoisted
function sayHi() {
  return console.log("Hi");
}

// function expression
const sayHi2 = function() {
  return console.log("Hi Again");
};

// they can be ran without being declared (this function has no name)
// aka anonymous function
// also no hoisting
// it can be passed around or used

// you can also name them
// const sayHi2 = function sayHi3(){
//   return;
// }
// a good example of such is a callback function

// arrow function

const sayHi3 = () => {
  return console.log("hi");
};

// or shorter

const sayHi4 = () => console.log("hi");

sayHi4();
