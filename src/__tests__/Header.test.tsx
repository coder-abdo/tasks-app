import React from "react";
import { Provider } from "react-redux";
import Store from "../store/store";
import { Header } from "../components/Header";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
beforeEach(cleanup);
describe("<Header />", () => {
  it("render the header of the app", () => {
    const { queryByTestId } = render(
      <Provider store={Store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    expect(queryByTestId("header")).toBeTruthy();
  });
});
