// Exercise 1: Basic .then()

// Create a function that returns a Promise which:

// Resolves after 2 seconds

// Resolves with the message "Done"

// Task:
// Use .then() to print the message.
function afterTwoSecond() {
  return {
    then(resolve, reject) {
      setTimeout(() => {
        resolve("Done");
      }, 2000);
    },
  };
}
afterTwoSecond().then((message) => console.log("Executed"));
