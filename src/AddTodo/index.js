import React, { useState } from "react";

function AddTodo({ saveTodo }) {
  const [todo, setTodo] = useState();

  function todoSaved() {
    saveTodo(todo);
  }
  return (
    <div className="AddTodo">
      <h2>Add todo: </h2>
      <label>
        Thing todo:{" "}
        <input type="text" onChange={(e) => setTodo(e.target.value)}></input>
      </label>
      <button onClick={() => todoSaved()}>Add</button>
    </div>
  );
}

export default AddTodo;
