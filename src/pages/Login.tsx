import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AUTHORIZED_USER } from "../actions/Action";
import { LoginContainer, LoginForm } from "../styles/LoginStyle";
import { IState } from "../interfaces/interfaces";

export const Login = () => {
  const userInfo = useSelector((state: IState) => state.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === userInfo.username && password === userInfo.password) {
      dispatch({ type: AUTHORIZED_USER });
      history.push("/");
    } else {
      if (username !== userInfo.username) {
        setErr("username does not matched");
      } else if (password !== userInfo.password) {
        setErr("password does not matched");
      } else {
        setErr("your password or username does not matched");
      }
    }
    setUsername("");
    setPassword("");
  };
  return (
    <LoginContainer>
      <h2>hello welcome back</h2>
      <LoginForm onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          id="user"
          placeholder="Username"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
          value={username}
          required
        />
        <input
          type="password"
          name="password"
          id="pass"
          placeholder="Password"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          required
        />
        <button type="submit">Login</button>
      </LoginForm>
      {err && <div className="err-message">{err}</div>}
    </LoginContainer>
  );
};
