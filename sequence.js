// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using Promises and async/await.
// Objective: Fetch multiple URLs one after another and process the data sequentially
async function sequencePromise() {
    const res1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data1 = await res1.json();
    console.log(data1);

    const res2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    const data2 = await res2.json();
    console.log(data2);

    const res3 = await fetch("https://jsonplaceholder.typicode.com/posts/3");
    const data3 = await res3.json();
    console.log(data3);

    return data3;
}

sequencePromise()
  .then(result => console.log("Final result:", result))
  .catch(err => console.error(err));
