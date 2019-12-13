import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AUTHORIZED_USER } from "../actions/Action";
interface IUser {
  username: string;
  password: string;
}
export const Login = () => {
  const userInfo = useSelector((state: any) => state.user);
  const isAuthorized = useSelector((state: any) => state.isAuthorized);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === userInfo.username && password === userInfo.password) {
      dispatch({ type: AUTHORIZED_USER });
      history.push("/");
    } else {
      alert("error info");
    }
    setUsername("");
    setPassword("");
  };
  return (
    <div>
      <h2>hello welcome back</h2>
      <form onSubmit={handleSubmit}>
        <div>
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
        </div>
        <div>
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
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
