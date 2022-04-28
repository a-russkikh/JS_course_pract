// function multByFactor(value, multiplier = 1) {
//   return value * multiplier;
// }

// console.log(multByFactor(10, 2));
// console.log(multByFactor(5));

const newPost = (post, addedAt = Date()) => ({
  ...post,
  addedAt,
});

const firstPost = {
  id: 1,
  author: "AlexuS",
};
console.log(newPost(firstPost));
