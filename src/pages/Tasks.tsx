import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TASK, REMOVE_TASK } from "../actions/Action";
import AppTasks from "../components/Tasks";
import Task from "../components/Task";
import styled from "styled-components";
const TaskForm = styled.form`
  padding: 12vh 4vw 2vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    padding-top: 18vh;
  }
  input[type="text"] {
    border: 1px solid #eee;
    text-indent: 10px;
    border-radius: 3px;
    padding: 1vh 0;
    min-width: 25vw;
    margin-right: 2vw;
    @media (max-width: 600px) {
      margin-right: 0;
      margin-bottom: 2vh;
      width: 100%;
      font-size: 4vw;
    }
    ::placeholder {
      font-size: 1.2vw;
      color: #ccc;
      text-transform: capitalize;
      @media (max-width: 600px) {
        font-size: 3vw;
      }
    }
  }
  button[type="submit"] {
    padding: 1vh 2vw;
    font-size: 1vw;
    text-transform: capitalize;
    background-color: #333;
    color: #fff;
    border: 1px solid #333;
    border-radius: 3px;
    transition: color 0.3s, background-color 0.3s;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
      background-color: #fff;
      color: #333;
    }
    @media (max-width: 600px) {
      width: 100%;
      font-size: 4vw;
    }
  }
`;
export const Tasks = () => {
  const tasks = useSelector((state: any) => state.tasks);
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
        {tasks.map((task: any) => (
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
