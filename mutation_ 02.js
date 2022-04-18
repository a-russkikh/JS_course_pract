// const person = {
//   name: "Bob",
//   age: 25,
// };

// const person2 = { ...person }; //spread

// person2.name = "Alice";

// console.log(person2.name);
// console.log(person.name);

const person = {
  name: "Bob",
  age: 25,
};

const person2 = JSON.parse(JSON.stringify(person));

person2.name = "Alice";

console.log(person2.name);
console.log(person.name);
