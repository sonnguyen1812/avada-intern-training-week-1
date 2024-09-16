// Spread/Rest operator

/**
 * Merge two object with spread syntax
 *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */
const person = {
  id: 1,
  name: "John Doe",
};

const job = { job: "NodeJs Developer" };
const mergePerson = { ...person, ...job };
console.log(mergePerson);
// Kết quả: { id: 1, name: 'John Doe', job: 'NodeJs Developer' }

// You can use this to pick/omit fields from object
const post = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

const { userId, id, ...postSelected } = post; // post object should contain only title and body
console.log(post);
// Kết quả: { title: 'sunt aut facere...', body: 'quia et suscipit...' }

const sum = (...numbers) => numbers.reduce((total, num) => total + num, 0);
console.log(sum(1, 2, 3, 4)); // Kết quả: 10
