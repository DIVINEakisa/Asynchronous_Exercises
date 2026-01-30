let controller; // stores the controller of the LAST request

const changeToLatest = async () => {
  // 1️⃣ Abort the previous request
  if (controller) {
    controller.abort(); // cancels the old fetch
  }

  // 2️⃣ Create a new controller for the NEW request
  controller = new AbortController();
  const signal = controller.signal;

  try {
    // 3️⃣ Start the latest request
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      signal,
    });

    // 4️⃣ Only this request can reach here
    const data = await response.json();
    console.log("Latest data:", data);
  } catch (err) {
    // 5️⃣ Old request ends here
    if (err.name === "AbortError") {
      console.log("Previous request aborted");
    } else {
      console.error("Real error:", err);
    }
  }
};
