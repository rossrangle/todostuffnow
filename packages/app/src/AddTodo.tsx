import React, { useState } from "react";
import { Box, FormControl, Label, Input, Button } from "ds";

function AddTodo({ saveTodo }: { saveTodo: Function }) {
  const [todo, setTodo] = useState("");

  function todoSaved() {
    saveTodo(todo);
  }

  return (
    <Box mb={3} p={3}>
      <FormControl.Field>
        <Label htmlFor="new-todo">Add a thing TODO:</Label>
        <Input
          value={todo}
          id="new-todo"
          placeholder="Get a cup of coffee..."
          onChange={(e: any) => setTodo(e.target.value)}
          style={{ flexGrow: 1 }}
        />
      </FormControl.Field>
      <Button
        onClick={() => {
          todoSaved();
          setTodo("");
        }}
        style={{ width: "100%" }}
        disabled={todo === ""}
      >
        Add TODO
      </Button>
    </Box>
  );
}

export default AddTodo;
