import React from "react";
import { FaTag, FaTimes } from "react-icons/fa";
import { AppTask } from "../styles/TaskStyle";
import { IProps } from "../interfaces/interfaces";

const Task = ({ title, cateogry, handleRemoveTask }: IProps) => {
  return (
    <AppTask data-testid="task">
      <h2 className="task-title">{title}</h2>
      <div className="cateogry">
        <FaTag />
        <span>category: {cateogry}</span>
      </div>
      <FaTimes onClick={handleRemoveTask} className="remove-btn" />
    </AppTask>
  );
};

export default Task;
