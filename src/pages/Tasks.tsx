import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TASK, REMOVE_TASK } from "../actions/Action";
import AppTasks from "../components/Tasks";
import Task from "../components/Task";
import TaskForm from "../styles/TasksStyle";
import { IState, ITask } from "../interfaces/interfaces";
export const Tasks = () => {
  const tasks: ITask[] = useSelector((state: IState) => state.tasks);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [cateogry, setCateogry] = useState("");
  const validateForm = () => title.length && cateogry.length;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch({
        type: ADD_TASK,
        payload: {
          title,
          cateogry
        }
      });
    } else {
      alert("error");
    }

    setTitle("");
    setTitle("");
  };

  return (
    <div>
      <h2>control your tasks</h2>
      <TaskForm onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          placeholder="task title"
          required
        />
        <input
          type="text"
          value={cateogry}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCateogry(e.target.value)
          }
          placeholder="task category"
          required
        />
        <button type="submit">Add Task</button>
      </TaskForm>
      <AppTasks>
        {tasks.map((task: ITask) => (
          <Task
            key={task.id}
            {...task}
            handleRemoveTask={() =>
              dispatch({ type: REMOVE_TASK, payload: task.id })
            }
          />
        ))}
      </AppTasks>
    </div>
  );
};
