import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";
import { REMOVE_TASK } from "../actions/Action";
import Task from "../components/Task";
import Tasks from "../components/Tasks";
import { ProfileInfo } from "../styles/ProfileStyle";
import { IState, ITask } from "../interfaces/interfaces";
export const Profile = () => {
  const tasks: ITask[] = useSelector((state: IState) => state.tasks);
  const dispatch = useDispatch();
  return (
    <>
      <ProfileInfo>
        <FaRegUserCircle />
        <span>Admin </span>
        <span className="tasks-num">tasks: {tasks.length}</span>
      </ProfileInfo>
      <Tasks>
        {tasks.map((task: ITask) => (
          <Task
            key={task.id}
            {...task}
            handleRemoveTask={() =>
              dispatch({ type: REMOVE_TASK, payload: task.id })
            }
          />
        ))}
      </Tasks>
    </>
  );
};
