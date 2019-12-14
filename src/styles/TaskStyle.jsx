import styled from "styled-components";
// styling task component
export const AppTask = styled.div`
  min-width: 30vw;
  width: 100%;
  padding: 2vh 3vw;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.15);
  position: relative;
  &:not(:last-child) {
    margin-bottom: 3vh;
  }
  .cateogry {
    display: flex;
    align-items: center;
    span {
      margin-left: 0.3vw;
    }
  }
  .remove-btn {
    position: absolute;
    right: 2vw;
    top: 2vh;
    cursor: pointer;
  }
  .task-title {
    font-size: 3vw;
    margin-bottom: 2vh;
  }
`;
