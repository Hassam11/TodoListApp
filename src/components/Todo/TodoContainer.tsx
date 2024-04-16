import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoContainer() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="bg-white rounded-2xl w-[400px] h-[400px] flex flex-col justify-center items-center m-auto">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}
