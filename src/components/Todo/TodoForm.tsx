import { ChangeEvent, FormEvent, useState } from "react";

export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState<string>("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add Todo"
        type="text"
        value={todo}
        onChange={handleChangeInput}
      />
      <button type="submit">Add</button>
    </form>
  );
}
