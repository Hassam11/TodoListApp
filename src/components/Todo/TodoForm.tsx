import { ChangeEvent, FormEvent, useState } from "react";

export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState<string>("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      task: todo,
      date: Date.now(),
      completed: false,
    };
    addTodo(newTask);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-2/3 mx-auto">
      <input
        placeholder="Add Todo"
        className="font-semibold text-2xl p-2 rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-gray-600"
        type="text"
        value={todo}
        onChange={handleChangeInput}
      />

      <button
        type="submit"
        className="bg-black text-white w-full rounded-2xl text-2xl p-2 uppercase font-semibold "
      >
        Add
      </button>
    </form>
  );
}
