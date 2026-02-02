// Write a JavaScript function that fetches data from an API and
// cancels the request if it takes longer than a specified time.

async function fetchData() {
  let controller = new AbortController();
  let signal = controller.signal;
  let timeOut = setTimeout(() => {
    controller.abort();
  }, 500);
  try {
    let url = await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal,
    });
    let resp = await url.json();
    clearTimeout(timeOut);
    return resp;
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Request Time Out");
    }
    throw err;
  }
}
fetchData().then((data) => console.log(data));
