import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchingData, REMOVE_TASK } from "../actions/Action";
import Task from "../components/Task";
import Tasks from "../components/Tasks";
import styled from "styled-components";
const HomeJumbotron = styled.div`
  padding: 18vh 4vw 2vh;
  min-width: 50vw;
  width: 100%;
  background-color: #eee;
  color: #333;
  text-transform: capitalize;
  h1 {
    font-size: 5vw;
    margin-bottom: 2vh;
    font-weight: 700;
  }
  p {
    font-size: 2vw;
  }
`;
export const Home = () => {
  const tasks = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();
  const getData = () => dispatch(fetchingData());
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, [tasks]);
  const handleRemoveTask = (task: any) =>
    dispatch({ type: REMOVE_TASK, payload: task });
  return (
    <>
      <HomeJumbotron>
        <h1>welcome to tasky app</h1>
        <p>tasky app is your place to control your tasks around day</p>
      </HomeJumbotron>
      <Tasks>
        {tasks.map((task: any) => (
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
