import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Tasks } from "../pages/Tasks";
import { Provider } from "react-redux";
import Store from "../store/store";
import { ADD_TASK } from "../actions/Action";
import { BrowserRouter as Router } from "react-router-dom";
import configureStore from "redux-mock-store";

beforeEach(cleanup);
describe("render Tasks page", () => {
  const store = configureStore({
    tasks: []
  });
  const addTask = jest.fn();
  it("should render the form of Tasks ", () => {
    const TaskPage = render(
      <Provider store={Store}>
        <Router>
          <Tasks />
        </Router>
      </Provider>
    );
    expect(TaskPage).toBeTruthy();
    expect(TaskPage).toMatchSnapshot();
  });
  it("should change the task title and task cateogry properly", () => {
    const { getByTestId } = render(
      <Provider store={Store}>
        <Router>
          <Tasks />
        </Router>
      </Provider>
    );
    expect(getByTestId("task-title")).toHaveValue("");
    expect(getByTestId("task-cateogry")).toHaveValue("");
    fireEvent.change(getByTestId("task-title"), {
      target: { value: "do laundry" }
    });
    fireEvent.change(getByTestId("task-cateogry"), {
      target: { value: "simpleTodo" }
    });
    expect(getByTestId("task-title")).toHaveValue("do laundry");
    expect(getByTestId("task-cateogry")).toHaveValue("simpleTodo");
    fireEvent.click(getByTestId("submiting"), { preventDefault() {} });
    expect(addTask.mock.calls.length).toEqual(0);
  });
});
