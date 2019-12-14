import styled from "styled-components";
const LoginContainer = styled.div`
  padding: 13vh 4vw 2vh;
  text-transform: capitalize;
  h2 {
    font-size: 4vw;
    font-weight: 500;
    margin-bottom: 3vh;
    text-align: center;
  }
`;
const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    border: 1px solid #eee;
    text-indent: 10px;
    border-radius: 3px;
    padding: 1vh 0;
    min-width: 25vw;
    margin-right: 2vw;
    @media (max-width: 600px) {
      margin-right: 0;
      margin-bottom: 2vh;
      width: 100%;
      font-size: 4vw;
    }
    ::placeholder {
      font-size: 1.2vw;
      color: #ccc;
      text-transform: capitalize;
      @media (max-width: 600px) {
        font-size: 3vw;
      }
    }
  }
  button[type="submit"] {
    padding: 1vh 2vw;
    font-size: 1vw;
    text-transform: capitalize;
    background-color: #333;
    color: #fff;
    border: 1px solid #333;
    border-radius: 3px;
    transition: color 0.3s, background-color 0.3s;
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
      background-color: #fff;
      color: #333;
    }
    @media (max-width: 600px) {
      width: 100%;
      font-size: 4vw;
    }
  }
`;
export { LoginContainer, LoginForm };
