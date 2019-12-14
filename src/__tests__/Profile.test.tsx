import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Profile } from "../pages/Profile";
import { Provider } from "react-redux";
import Store from "../store/store";
import { BrowserRouter as Router } from "react-router-dom";
beforeEach(cleanup);
describe("render Profile page", () => {
  it("should render the form of Profile ", () => {
    render(
      <Provider store={Store}>
        <Router>
          <Profile />
        </Router>
      </Provider>
    );
  });
});
