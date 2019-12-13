import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchingData, REMOVE_TASK } from "../actions/Action";
import Task from "../components/Task";
export const Home = () => {
  const tasks = useSelector((state: any) => state.tasks);
  const user = useSelector((state: any) => state.user);

  const dispatch = useDispatch();
  const getData = () => dispatch(fetchingData());
  useEffect(() => {
    getData();
  }, []);
  const handleRemoveTask = task =>
    dispatch({ type: REMOVE_TASK, payload: task });
  return (
    <div>
      {tasks.map((task: any) => (
        <Task
          key={task.id}
          {...task}
          handleRemoveTask={() => handleRemoveTask(task.id)}
        />
      ))}
    </div>
  );
};
