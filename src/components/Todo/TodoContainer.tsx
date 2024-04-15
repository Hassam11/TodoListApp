import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoContainer() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
}
