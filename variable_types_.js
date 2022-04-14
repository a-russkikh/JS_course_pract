//string boolean number null undefined symbol
//object

const objectA = {
  a: 10,
  b: true,
};

const copyOfA = objectA;

copyOfA.a = 20;

console.log(copyOfA.a);
