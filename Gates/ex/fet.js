// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.
let controller = new AbortController();
const signal = controller.signal;
async function fetchData(url) {
  let timeOut = setTimeout(() => {
    controller.abort();
  }, 1000);
  try {
    let api = await fetch(url, { signal });
    let response = await api.json();
    clearTimeout(timeOut);
    return response;
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Request Timeout");
    }
    throw error;
  }
}
fetchData("https://jsonplaceholder.typicode.com/posts")
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
