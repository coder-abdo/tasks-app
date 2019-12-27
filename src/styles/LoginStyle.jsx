import styled from "styled-components";
const LoginContainer = styled.div`
  padding: 13vh 4vw 2vh;
  text-transform: capitalize;
  @media (max-width: 600px) {
    padding-top: 16vh;
  }
  .err-message {
    min-width: 60vw;
    width: 100%;
    background-color: #fff;
    color: #f12;
    font-size: 2vw;
    text-align: center;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    border: none;
    margin: 4vh 0;
    padding: 4vh 0;
    @media (max-width: 600px) {
      font-size: 4vw;
    }
  }
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
  @media (max-width: 600px) {
    flex-direction: column;
  }
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
      padding: 2vh 0;
    }
    ::-webkit-input-placeholder {
      font-size: 1.2vw;
      color: #ccc;
      text-transform: capitalize;
      @media (max-width: 600px) {
        font-size: 3vw;
      }
    }
    ::-moz-placeholder {
      font-size: 1.2vw;
      color: #ccc;
      text-transform: capitalize;
      @media (max-width: 600px) {
        font-size: 3vw;
      }
    }
    :-ms-input-placeholder {
      font-size: 1.2vw;
      color: #ccc;
      text-transform: capitalize;
      @media (max-width: 600px) {
        font-size: 3vw;
      }
    }
    :moz-placeholder {
      font-size: 1.2vw;
      color: #ccc;
      text-transform: capitalize;
      @media (max-width: 600px) {
        font-size: 3vw;
      }
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
      padding: 2vh 2vw;
    }
  }
`;
export { LoginContainer, LoginForm };
