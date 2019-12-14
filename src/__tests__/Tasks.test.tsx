import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Tasks } from "../pages/Tasks";
import { Provider } from "react-redux";
import Store from "../store/store";
import { BrowserRouter as Router } from "react-router-dom";
beforeEach(cleanup);
describe("render Tasks page", () => {
  it("should render the form of Tasks ", () => {
    render(
      <Provider store={Store}>
        <Router>
          <Tasks />
        </Router>
      </Provider>
    );
  });
});
