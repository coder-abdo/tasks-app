import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AUTHORIZED_USER } from "../actions/Action";
import { IState } from "../interfaces/interfaces";

export const useAuth = () => {
  const userInfo = useSelector((state: IState) => state.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [err, setErr] = useState<string>("");
  const history = useHistory();
  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
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
  return {
    handleSubmit,
    err,
    handleUserNameChange,
    handlePasswordChange,
    username,
    password
  };
};
