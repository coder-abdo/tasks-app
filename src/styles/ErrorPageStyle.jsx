import styled from "styled-components";
export const ErrorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  h1 {
    .large {
      font-size: 10vw;
      display: block;
      text-align: center;
      font-weight: 700;
      color: #222;
    }
    font-size: 5vw;
    color: #444;
  }
`;
