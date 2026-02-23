async function fetchUserTodos() {
  const [responseUser, responseTodos] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/todos"),
  ]);

  let users = await responseUser.json();
  let todos = await responseTodos.json();
  let combinedData = users.map((user) => {
    const UserTodo = todos.filter((todo) => todo.userId === user.id);
    return {
      ...user,
      todos: UserTodo,
    };
  });
  return combinedData;
}
fetchUserTodos()
  .then((data) => {
    console.log(data[0].todos);
  })
  .catch((error) => console.log("ASomething Went Wrong", error));
