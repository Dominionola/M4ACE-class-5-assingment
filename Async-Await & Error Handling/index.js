// // Description
// Async/await syntax revolutionized asynchronous JavaScript, making async code look and behave like synchronous code. Master this modern approach to handle complex async operations cleanly.

// Instructions
// Async/Await Basics - Convert promise-based code to async/await, practice error handling with try/catch, and understand the difference between sequential and parallel execution patterns
let fetchedUserName = "";

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((users) => {
    console.log(`1. ${users.name} (ID: ${users.id})`);

    fetchedUserName = users.name;

    return fetch(
      `https://jsonplaceholder.typicode.com/todos?userID=${users.id}`,
    );
  })

  .then((response) => response.json())
  .then((todos) => {
    console.log(
      `2. Success! Found ${todos.length} to-do items for ${fetchedUserName}.`,
    );
    console.log(` First To-Do: "${todos[0].title}"`);
  })
  .catch((error) => {
    console.error("The process broke", error);
  });
nn;
