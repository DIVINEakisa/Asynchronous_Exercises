// This is the practical question I had given:
// Write a JavaScript function that fetches
// data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.
// https://jsonplaceholder.typicode.com/posts/1

async function fetchData() {
  let urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
    "https://jsonplaceholder.typicode.com/posts/3",
  ];
  let fet = urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  });
  return Promise.all(fet);
}
fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
