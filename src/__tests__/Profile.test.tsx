import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Profile } from "../pages/Profile";
import { Provider } from "react-redux";
import Store from "../store/store";
import { BrowserRouter as Router } from "react-router-dom";
beforeEach(cleanup);
describe("render Profile page", () => {
  it("should render Profile page properly ", () => {
    const ProfilePage = render(
      <Provider store={Store}>
        <Router>
          <Profile />
        </Router>
      </Provider>
    );
    expect(ProfilePage).toBeTruthy();
    expect(ProfilePage).toMatchSnapshot();
  });
  it("should show the number of tasks properly", () => {
    const { getByTestId } = render(
      <Provider store={Store}>
        <Router>
          <Profile />
        </Router>
      </Provider>
    );
    expect(getByTestId("tasks-numbers").textContent).toEqual("tasks: 0");
  });
});
