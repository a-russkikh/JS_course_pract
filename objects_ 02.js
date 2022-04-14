const myCity = {
  city: "New York",
};
console.log(myCity);

myCity["popular"] = true;
console.log(myCity);

const countryPropertyName = "country";
myCity[countryPropertyName] = "USA";
console.log(myCity);

const cityPropertyName = "city";
delete myCity[cityPropertyName];
console.log(myCity);
