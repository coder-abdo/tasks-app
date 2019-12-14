import styled from "styled-components";
export const AppTasks = styled.div`
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
