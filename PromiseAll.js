// Promise.all – Fail Fast Behavior

// Create 3 Promises:

// p1 resolves "User data" after 1s

// p2 rejects "Auth failed" after 2s

// p3 resolves "Settings loaded" after 3s

// Task:

// Use Promise.all() and explain:

// What happens?

// Does p3 still run?

// Which value is returned?

// 📌 Goal: Understand fail-fast behavior.
function PromiseMethod() {
  const p1 = new Promise((resolve) => {
    setTimeout(() => {
      const obj = {
        name: "divine",
        age: 12,
        status: "student",
      };
      resolve(obj);
    }, 1000);
  });
  const p2 = new Promise((reject) =>
    setTimeout(() => reject("Auth failed"), 2000)
  );
  const p3 = new Promise((resolve) =>
    setTimeout(() => resolve("Settings loaded"), 3000)
  );
}
let pr = Promise.all([p1, p2, p3]).then((mess) => console.log("Success"));
PromiseMethod().pr;
