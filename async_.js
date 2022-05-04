async function asyncFn() {
  //Always call back promise
}

const asyncFn = async () => {
  //Always call back promise
};

const asyncFn = async () => {
  return "Success!";
};

asyncFn();

asyncFn().then((value) => console.log(value));

const asyncFn = async () => {
  throw new Error("There was an error!");
};

asyncFn()
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message));

const asyncFn = async () => {
  await (<Promise>//</Promise>);
};
asyncFn();

const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const asyncFn = async () => {
  console.log("Timer starts");
  await timerPromise();
  console.log("Timer ended");
};

asyncFn();

const timerPromise = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));

const asyncFn = async () => {
  console.log("Timer starts");
  const startTime = performance.now();
  await timerPromise();
  const endTime = performance.now();
  console.log("Timer ended", endTime - startTime);
};

asyncFn();
