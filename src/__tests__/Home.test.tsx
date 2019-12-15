import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Home } from "../pages/Home";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Store from "../store/store";
beforeEach(cleanup);
describe("render home page", () => {
  it("should render the header and tasks", () => {
    const HomePage = render(
      <Provider store={Store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    expect(HomePage).toMatchSnapshot();
  });
});
