// try {
//   //Running Code
// } catch (error) {
//   //This block of code will run if there is any error in block try
// }

const fnWithError = () => {
  throw new Error("Some error");
};

try {
  fnWithError();
} catch (error) {
  console.error(error);
  console.log(error.message);
}

console.log("Continue...");
