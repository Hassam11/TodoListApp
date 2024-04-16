import { ITask } from "../../model/Task.interface";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <ul className="w-2/3 mx-auto pt-4">
      {todos.map((todo: ITask) => (
        <TodoItem todos={todo} key={todo.id} />
      ))}
    </ul>
  );
}
