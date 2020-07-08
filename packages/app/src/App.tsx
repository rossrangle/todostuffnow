import React, { useState } from "react";
import { Box, Text, Heading, theme, Flex, Image } from "ds";
import { ThemeProvider } from "styled-components";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Timer from "./Timer";
import logo from "./imgs/logo.png";

export interface Todo {
  text: string;
  id: string;
  done: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function toggleTodo(todo: Todo) {
    console.log(todo);
    const todoIndex = todos.findIndex((t) => t.id === todo.id);
    const todoToModify = { ...todos[todoIndex] } as Todo;
    todoToModify.done = !todo.done;
    todos[todoIndex] = todoToModify;
    setTodos([...todos]);
  }

  return (
    <ThemeProvider theme={theme.dark}>
      <Box className="App" style={{ maxWidth: "35rem", margin: "auto" }}>
        <Box mb={4}>
          <Flex mb={3} p={3} alignItems="center">
            <Image src={logo} height="6rem" mr={3} />
            <Heading variant="heading-1">TODO Stuff Now!</Heading>
          </Flex>
          <Box mb={3} p={3}>
            <Text variant="body">
              Make a short list of stuff that needs to get done right now.
            </Text>
            <Text variant="body">
              The list gets reset every time the app restarts. Better get
              cracking!
            </Text>
          </Box>

          <Timer></Timer>

          <AddTodo
            saveTodo={(todoText: string) =>
              setTodos([
                ...todos,
                {
                  id: `${todos.length + 1}`,
                  text: todoText,
                  done: false,
                } as Todo,
              ])
            }
          ></AddTodo>

          {todos.length > 0 && (
            <TodoList todos={todos} toggleTodo={toggleTodo}></TodoList>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
