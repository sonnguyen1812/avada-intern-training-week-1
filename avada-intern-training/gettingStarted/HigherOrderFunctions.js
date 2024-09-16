/**
 * Higher Order Functions (HOF) là một khái niệm mạnh mẽ trong Javascript mà bạn cũng có thể dùng trong môi trường
 NodeJS. HOF là các hàm nhận tham số là hàm khác hoặc trả về một hàm khác.
 * You can use the JS high order function in the NodeJS env
 *
 * See these guide on high order functions
 * @link https://blog.bitsrc.io/understanding-higher-order-functions-in-javascript-75461803bad
 */
const myTechStack = ["NodeJs", "ReactJs", "Firebase"]; // It is recommended that you use camelcase for variable name
const myTechStatus = myTechStack.map((stack) => {
  return {
    name: stack,
    status: "not-finished",
  };
});
console.log(myTechStatus);

// Filter only unique item
const list = [11, 24, 31, 24, 11, 56, 34];
const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};
const filterList = list.filter(onlyUnique);
console.log(filterList); // Kết quả: [11, 24, 31, 56, 34]
