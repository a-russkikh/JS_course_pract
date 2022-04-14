//JS is dynamic type language

// let a = 10;
// a = true;
// a = "AlexuS";
// a = undefined;

// function a() {
//   console.log("Hey there");
// }

// console.log(a());

// a = 10;

// console.log(a());
//err 'a is not a function'

const a = () => {
  console.log("Heey there");
};
a();
a = 10;
//err 'Assignment to constant variable.'
