// let a;
// const b = 5;
// if (a > b) {
//   console.log("a is larger");
// }
// for (let i = 0; i++; i < 5) {
//   console.log(i);
// }

function myFn(a) {
	console.log(a);
}

const b=true;
let c=10;

myFn(2+3)
myFn(b)
myFn(c=c+1)

myFn(c=c+1;) //Uncaught Syntax Error
myFn(let d)