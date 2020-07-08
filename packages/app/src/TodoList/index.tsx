import React from "react";

import "./TodoList.css";
import { Box, Heading, Button, Text, Flex, Icons } from "ds";
import { Todo } from "../App";

function TodoList({
  todos,
  toggleTodo,
}: {
  todos: Todo[];
  toggleTodo: Function;
}) {
  return (
    <Box mb={3} p={3} className="TodoList">
      <Heading variant="heading-2">Todos:</Heading>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Flex
              className={todo.done ? "todo todo--done" : "todo"}
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex alignItems="center">
                {todo.done ? (
                  <Icons.CheckCircle color="brand.primary" mr={2} />
                ) : (
                  <Icons.Error color="orange" mr={2} />
                )}

                <Text variant="body">{todo.text}</Text>
              </Flex>

              <Button
                onClick={() => toggleTodo(todo)}
                variant={todo.done ? "transparent" : "secondary"}
              >
                {todo.done ? "Undo" : "Done"}
              </Button>
            </Flex>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default TodoList;
