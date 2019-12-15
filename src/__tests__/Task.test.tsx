import React from "react";
import Task from "../components/Task";
import {
  cleanup,
  render,
  fireEvent,
  getByTestId
} from "@testing-library/react";
beforeEach(cleanup);

describe("<Task />", () => {
  it("render Task Component", () => {
    const mockData = {
      id: "1",
      title: "learn testing",
      cateogry: "studying",
      handleRemoveTask: jest.fn()
    };
    const { queryByTestId } = render(<Task {...mockData} />);
    expect(queryByTestId("task")).toBeTruthy();
    expect(queryByTestId("task")).toMatchSnapshot();
  });
});
