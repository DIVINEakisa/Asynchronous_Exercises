// Exercise: Fake API call

// Create a function getUser() that returns a Promise that resolves with a user object:

// { name: "Divine", age: 20 }

// Resolve after 2 seconds, then print:
function getUser(person) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(`Name:${person.name},Age:${person.age}`), 2000);
  });
}
let obj1 = {
  name: "Divine",
  age: 20,
};
getUser(obj1).then((result) => {
  console.log(result);
});
