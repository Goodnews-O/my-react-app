import React, { useState } from "react";

function App() {
  const [list, setlist] = useState([]);
  const [input, setinput] = useState("");

  const addToDo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setlist([...list, newTodo]);

    // clear input box
    setinput("");
  };

  const deleteTodo = (id) => {
    // filter out todo with id
    const newlist = list.filter((todo) => todo.id !== id);

    setlist(newlist);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <button onClick={() => addToDo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
