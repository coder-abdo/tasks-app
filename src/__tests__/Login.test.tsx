import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Login } from "../pages/Login";
import { Provider } from "react-redux";
import Store from "../store/store";
import { BrowserRouter as Router } from "react-router-dom";
beforeEach(cleanup);
describe("render Login page", () => {
  it("should render the the login page properly and the input fields should works fine ", () => {
    const LoginPage = render(
      <Provider store={Store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
    const inputUsername = LoginPage.getByTestId("user");
    const inputPassword = LoginPage.getByTestId("pass");
    expect(LoginPage).toMatchSnapshot();
    expect(inputUsername).toHaveValue("");
    expect(inputPassword).toHaveValue("");
    fireEvent.change(inputUsername, { target: { value: "Admin" } });
    fireEvent.change(inputPassword, { target: { value: "54321" } });
    expect(inputPassword).toHaveValue("54321");
  });
});
