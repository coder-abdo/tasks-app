import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TASK, REMOVE_TASK } from "../actions/Action";
import AppTasks from "../components/Tasks";
import Task from "../components/Task";
import TaskForm, { ErrMessage } from "../styles/TasksStyle";
import { IState, ITask } from "../interfaces/interfaces";
export const Tasks = () => {
  const tasks: ITask[] = useSelector((state: IState) => state.tasks);
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [cateogry, setCateogry] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const validateForm = () => title.trim().length && cateogry.trim().length;
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
      setErr("please fill the field");
    }

    setTitle("");
    setCateogry("");
  };

  return (
    <div>
      <h2>control your tasks</h2>
      <TaskForm onSubmit={handleSubmit}>
        <input
          data-testid="task-title"
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
          data-testid="task-cateogry"
          placeholder="task category"
          required
        />
        <button type="submit" data-testid="submiting">
          Add Task
        </button>
      </TaskForm>
      {err && <ErrMessage>{err}</ErrMessage>}
      <AppTasks>
        {tasks
          .sort((a, b) => +b.date - +a.date)
          .map((task: ITask) => (
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
