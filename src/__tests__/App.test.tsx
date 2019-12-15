import React from "react";
import App from "../App";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import Store from "../store/store";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";
beforeEach(cleanup);
describe("<App /> ", () => {
  it("should render app component properly", () => {
    const myAppComponent = render(
      <Provider store={Store}>
        <App />
      </Provider>
    );
    expect(myAppComponent).toBeTruthy();
    expect(myAppComponent).toMatchSnapshot();
  });
});
