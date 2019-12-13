import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";
import { REMOVE_TASK } from "../actions/Action";
import Task from "../components/Task";
export const Profile = () => {
  const tasks = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();
  // console.log(tasks);
  return (
    <div>
      <div>
        <FaRegUserCircle />
        <span>Admin </span>
        <span>tasks: {tasks.length}</span>
      </div>
      <div>
        {tasks.map((task: any) => (
          <Task
            key={task.id}
            {...task}
            handleRemoveTask={() =>
              dispatch({ type: REMOVE_TASK, payload: task.id })
            }
          />
        ))}
      </div>
    </div>
  );
};
