import React from "react";
import styled from "styled-components";
const AppTasks = styled.div`
  padding: 12vh 4vw 2vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2vw;
  height: 100vh;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
const Tasks = ({ children }) => {
  return <AppTasks>{children}</AppTasks>;
};

export default Tasks;
