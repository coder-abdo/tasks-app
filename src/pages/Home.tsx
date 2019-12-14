import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_TASK } from "../actions/Action";
import Task from "../components/Task";
import Tasks from "../components/Tasks";
import { HomeJumbotron } from "../styles/HomeJumbotron";
import { IState, ITask } from "../interfaces/interfaces";
export const Home = () => {
  const tasks: ITask[] = useSelector((state: IState) => state.tasks);
  const dispatch = useDispatch();

  const handleRemoveTask = (task: string) =>
    dispatch({ type: REMOVE_TASK, payload: task });
  return (
    <>
      <HomeJumbotron>
        <h1>welcome to tasky app</h1>
        <p>tasky app is your place to control your tasks around day</p>
      </HomeJumbotron>
      <Tasks>
        {tasks.map((task: ITask) => (
          <Task
            key={task.id}
            {...task}
            handleRemoveTask={() => handleRemoveTask(task.id)}
          />
        ))}
      </Tasks>
    </>
  );
};
