import { useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

export default function TodoCheckBox({ todos }) {
  const [isChecked, setIsChecked] = useState(todos.completed);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <input
        type="checkbox"
        onChange={handleChange}
        checked={isChecked}
        className="hidden"
      />
      <div className="w-8 h-8 flex items-center  justify-center   mr-2">
        {isChecked ? <FaRegCheckCircle size={30} /> : <FaRegCircle size={30} />}
      </div>
      <p
        className={`text-2xl font-semibold ${
          isChecked ? "line-through text-gray-500" : ""
        }`}
      >
        {todos.task}
      </p>
    </>
  );
}
