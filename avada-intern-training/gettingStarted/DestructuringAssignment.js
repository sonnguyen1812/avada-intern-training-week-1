/**
 * Destructuring Assignment
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */

const getUser = () => {
  // Mimic the process that we may retrieved the user data from the web somewhere
  const user = {
    id: 1,
    name: "John Doe",
    status: "active",
  };
  // return the user object
  return user;
};

const { name, status } = getUser(); // You can use DA to extract only needed info
console.log(name, status); // Kết quả: John Doe active

const logInfo = ({ name, age = 19 }) => {
  // default argument with age = 19
  console.log(`Hi, I'm ${name}. I'm ${age}`);
};
// With destruction parameter, you can swap the parameters order as you like
console.log(logInfo({ age: 19, name: "John Doe" })); // Kết quả: Hi, I'm John Doe. I'm 19
