import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Login } from "../pages/Login";
import { Provider } from "react-redux";
import Store from "../store/store";
import { BrowserRouter as Router } from "react-router-dom";
beforeEach(cleanup);
describe("render Login page", () => {
  it("should render the form of login ", () => {
    render(
      <Provider store={Store}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );
  });
});
