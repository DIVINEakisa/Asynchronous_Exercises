// Write a JavaScript function fetchToDo that uses XMLHttpRequest to fetch data from the
// given URL([https://jsonplaceholder.typicode.com/todos/1](https://jsonplaceholder.typicode.com/todos/1)).
// The function should handle both successful responses and errors(such as network issues or invalid URLs).
// Upon receiving a successful response, it should log the fetched data to the console.
// If there's an error, it should catch the error and log an appropriate message
const { XMLHttpRequest } = require("xmlhttprequest");

function fetchToDo() {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

  // Success or server error
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log("Success:", xhr.responseText);
    } else {
      console.log("Server Error:", xhr.status);
    }
  };

  xhr.onerror = function () {
    console.log("Network Error Occured");
  };
  xhr.send();
}

fetchToDo();
