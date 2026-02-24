// function repeat() {
//   let setint = setInterval(() => {
//     console.log("I'm coming from set int");
//   }, 1000);
//   clearInterval(setint);
//   return setint;
// }
// repeat();
async function getFastPosts() {
  let urls = [
    "https://dummyjson.com/posts",
    "https://this-may-not-exist.com/posts",
    "https://jsonplaceholder.typicode.com/posts",
  ];
  let urlAn = urls.map((url) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error();

        return res.json();
      })
      .catch((err) => console.log("something wrong"));
  });
  Promise.race([urlAn]);
}
