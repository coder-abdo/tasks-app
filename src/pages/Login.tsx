import React from "react";
import { LoginContainer, LoginForm } from "../styles/LoginStyle";
import { useAuth } from "../hooks/useAuth";
export const Login = () => {
  const {
    handleSubmit,
    err,
    handleUserNameChange,
    handlePasswordChange,
    username,
    password
  } = useAuth();

  return (
    <LoginContainer>
      <h2>hello welcome back</h2>
      <LoginForm onSubmit={handleSubmit} data-testid="form">
        <input
          type="text"
          name="user"
          data-testid="user"
          placeholder="Username"
          onChange={handleUserNameChange}
          value={username}
          required
        />
        <input
          type="password"
          name="password"
          data-testid="pass"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Login</button>
      </LoginForm>
      {err && (
        <div className="err-message" data-testid="err">
          {err}
        </div>
      )}
    </LoginContainer>
  );
};
