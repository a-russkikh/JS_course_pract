// const myFunction = (a, b) => {
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// };

// console.log(myFunction(5, 3)); //9

// //Arrow function in other Function
// setTimeout(() => {
//   console.log("Delayed message");
// }, 2000);

// (a) => {
//Function body
// };

//Implicit return
// (a, b) => a + b;

function multByFactor(value, multiplier = 1) {
  return value * multiplier;
}

console.log(multByFactor(10, 2));
console.log(multByFactor(5));
