// Implement an abortable async function using `AbortController`, ensuring only the latest request result is used.
let controller = new AbortController();
const signal = controller.signal;
let changetoLatest = async () => {
  try {
    let url = await fetch("https://jsonplaceholder.typicode.com/todos", {
      signal,
    });
    let resp = await url.json();
    console.log(resp);
  } catch (err) {
    if (err.name == "AbortMessage") {
      console.error("It's Cancelled");
    } else {
      console.error("Something Went Wrong");
    }
  }
};
