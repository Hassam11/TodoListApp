import { ITask } from "../../model/Task.interface";

export default function TodoList({ todos }) {
  console.log(todos);
  return (
    <ul>
      {todos.map((todo: ITask) => (
        <li key={todo.id}>
          {todo.task} <span>{todo.completed}</span>
        </li>
      ))}
    </ul>
  );
}
