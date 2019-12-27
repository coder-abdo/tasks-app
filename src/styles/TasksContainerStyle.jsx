import styled from "styled-components";
export const AppTasks = styled.div`
  padding: 12vh 2vw 2vh;
  display: grid;
  grid-template-columns: repeat(3, minmax(25vw, 1fr));
  grid-template-rows: 30vh;
  grid-auto-rows: 30vh;
  grid-gap: 2vw;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
