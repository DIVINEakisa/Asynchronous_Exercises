let controller = new AbortController();
let signal = controller.signal;
let getApi = async () => {
  try {
    let url = await fetch("https://jsonplaceholder.typicode.com/users", {
      signal,
    });
    let resp = await url.json();
    console.log(resp);
  } catch (err) {
    if (err.name === "AbortError") {
      console.log("this is taking soo long");
    } else {
      console.error(err);
    }
  }
};
setTimeout(getApi, 1000);

setTimeout(() => {
  controller.abort();
}, 5000);
