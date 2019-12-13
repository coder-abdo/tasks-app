import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";
import { REMOVE_TASK } from "../actions/Action";
import Task from "../components/Task";
import Tasks from "../components/Tasks";
const ProfileInfo = styled.div`
  padding: 13vh 4vw 2vh;
  display: flex;
  align-items: center;
  span {
    margin-left: 0.5vw;
  }
  .tasks-num {
    margin-left: auto;
  }
  @media (max-width: 600px) {
    padding-top: 18vh;
  }
`;
export const Profile = () => {
  const tasks = useSelector((state: any) => state.tasks);
  const dispatch = useDispatch();
  // console.log(tasks);
  return (
    <>
      <ProfileInfo>
        <FaRegUserCircle />
        <span>Admin </span>
        <span className="tasks-num">tasks: {tasks.length}</span>
      </ProfileInfo>
      <Tasks>
        {tasks.map((task: any) => (
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
