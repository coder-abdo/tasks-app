import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Home } from "../pages/Home";
import { Provider } from "react-redux";
import Store from "../store/store";
import { BrowserRouter as Router } from "react-router-dom";
beforeEach(cleanup);
describe("render home page", () => {
  it("should render the header and tasks", () => {
    render(
      <Provider store={Store}>
        <Home />
      </Provider>
    );
  });
});
