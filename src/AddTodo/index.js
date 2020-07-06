import React, { useState } from "react";

function AddTodo({ saveTodo }) {
  const [todo, setTodo] = useState();

  function todoSaved() {
    saveTodo(todo);
  }
  return (
    <div className="AddTodo">
      <h2>Add todo: </h2>
      <input type="text" onChange={(e) => setTodo(e.target.value)}></input>
      <button onClick={() => todoSaved()}>Add</button>
    </div>
  );
}

export default AddTodo;
