// const a = 10;
// let b = a; // copy by value
// b = 30;

// console.log(a);
// console.log(b);

// const person = {
//   name: "Bob",
//   age: 21,
// };

// person.age = 22;
// person.isAdult = true;

// console.log(person.age);
// console.log(person.isAdult);

// const person = {
//   name: "Bob",
//   age: 25,
// };

// const person2 = person; //copy by reference

// person2.age = 26;
// person2.isAdult = true;

// console.log(person.age);
// console.log(person.isAdult);

const person = {
  name: "Bob",
  age: 25,
};

const person2 = Object.assign({}, person);

person2.age = 28;

console.log(person2.age);
console.log(person.age);
