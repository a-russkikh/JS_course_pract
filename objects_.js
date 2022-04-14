// const myCity = {
//   city: "New York",
//   popular: true,
//   country: "USA",
// };

// console.log(myCity.city);
//Dot notation

const myCity = {
  city: "New York",
};
console.log(myCity);

myCity.popular = true;
console.log(myCity);

myCity.country = "USA";
console.log(myCity);

delete myCity.city;
console.log(myCity);
