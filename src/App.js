import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  function toggleTodo(todo) {
    console.log(todo);
    const todoIndex = todos.findIndex((t) => t.id === todo.id);
    const todoToModify = { ...todos[todoIndex] };
    todoToModify.done = !todo.done;
    todos[todoIndex] = todoToModify;
    setTodos([...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO stuff now!</h1>
        <p>Add items and do them quick. List resets on every page refresh.</p>
      </header>
      <AddTodo
        saveTodo={(todoText) =>
          setTodos([
            ...todos,
            { id: todos.length + 1, text: todoText, done: false },
          ])
        }
      ></AddTodo>
      <TodoList todos={todos} toggleTodo={toggleTodo}></TodoList>
    </div>
  );
}

export default App;
