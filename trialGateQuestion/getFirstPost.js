// Imagine you are developing a real-time news application, and you need to fetch posts from three different sources to provide users with the latest updates.

// The API endpoints for getting posts are:

// https://dummyjson.com/posts
// https://this-may-not-exist.com/posts
// https://jsonplaceholder.typicode.com/posts

// To ensure a seamless user experience, you are supposed to create a
// function called getFastPosts that fetches posts
// from these endpoints simultaneously(concurrently)
// and only presents data from the source that
// responds the quickest, while ignoring slower or
// potentially unreliable sources.
async function getFastPosts() {
  let urls = [
    "https://dummyjson.com/posts",
    "https://this-may-not-exist.com/posts",
    "https://jsonplaceholder.typicode.com/posts",
  ];

  const requests = urls.map((url) =>
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed");
        return res.json();
      })
      .catch(() => new Promise(() => {})),
  );

  return Promise.race(requests);
}

getFastPosts()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
