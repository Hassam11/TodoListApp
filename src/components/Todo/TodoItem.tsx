import TodoCheckBox from "./TodoCheckBox";

export default function TodoItem({ todos }) {
  return (
    <li key={todos.id} className="flex items-center justify-between py-2 ">
      <div className="flex items-center">
        <label className="flex items-center cursor-pointer ">
          <TodoCheckBox todos={todos} />
        </label>
      </div>
    </li>
  );
}
