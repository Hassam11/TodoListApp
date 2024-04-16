import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoContainer() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="bg-white rounded-xl w-80 h-96 flex flex-col justify-between mx-auto p-4 shadow-lg">
      <TodoForm addTodo={addTodo} />
      <div className="flex-grow overflow-y-auto">
        <TodoList todos={todos} />
      </div>
    </div>
  );
}
