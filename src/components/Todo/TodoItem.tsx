import React, { useState } from "react";
import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

export default function TodoItem({ todos }) {
  const [isChecked, setIsChecked] = useState(todos.completed);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li key={todos.id} className="flex items-center justify-between py-2 ">
      <div className="flex items-center">
        <label className="flex items-center cursor-pointer ">
          <input
            type="checkbox"
            onChange={handleChange}
            checked={isChecked}
            className="hidden"
          />
          <div className="w-8 h-8 flex items-center justify-center   mr-2">
            {isChecked ? (
              <FaRegCheckCircle size={40} />
            ) : (
              <FaRegCircle size={40} />
            )}
          </div>
          <p
            className={`text-lg font-semibold ${
              isChecked ? "line-through text-gray-500" : ""
            }`}
          >
            {todos.task}
          </p>
        </label>
      </div>
    </li>
  );
}
