async function fetchUserTodos() {
  const [responseUser, responseTodos] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/todos"),
  ]);

  let users = await responseUser.json();
  let todos = await responseTodos.json();
  return { users, todos };
}
fetchUserTodos()
  .then((data) => console.log(data))
  .catch((error) => console.log("Something Went Wrong", error));
