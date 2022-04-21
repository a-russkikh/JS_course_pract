//Called Function
// function myFn(a, b) {
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// }

//Function expression
// function (a, b) {
//   let c;
//   a = a + 1;
//   c = a + b;
//   return c;
// }

//Varioable Function

const myFunction = function (a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

console.log(myFunction(5, 3));

setTimeout(function () {
  console.log("Delayed message");
}, 2000);
