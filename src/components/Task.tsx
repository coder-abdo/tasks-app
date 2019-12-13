import React from "react";
import { FaTag, FaTimes } from "react-icons/fa";
const Task = ({ title, cateogry, handleRemoveTask }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        <FaTag />
        <span>category: {cateogry}</span>
      </div>
      <FaTimes onClick={handleRemoveTask} />
    </div>
  );
};

export default Task;
