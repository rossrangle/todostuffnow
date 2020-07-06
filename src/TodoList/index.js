import React from "react";

function TodoList({ todos, toggleTodo }) {
  console.log({ TodoList: todos });
  return (
    <div className="TodoList">
      <h2>Todos: </h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? "done" : "todo"}>
            {todo.text}
            <button onClick={() => toggleTodo(todo)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
