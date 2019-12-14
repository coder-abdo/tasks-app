import React from "react";
import { AppTasks } from "../styles/TasksContainerStyle";
const Tasks = ({ children }) => {
  return <AppTasks>{children}</AppTasks>;
};

export default Tasks;
