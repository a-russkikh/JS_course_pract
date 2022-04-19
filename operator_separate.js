// const button = {
//   width: 200,
//   text: "buy",
// };

// const redButton = {
//   ...button,
//   color: "red",
// };

// console.table(redButton);

const buttonInfo = {
  text: "Buy",
};
const buttonStyle = {
  color: "yellow",
  width: 200,
  height: 300,
};
const button = {
  ...buttonInfo,
  ...buttonStyle,
};
console.table(button);
