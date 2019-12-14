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
    const { queryByTestId, queryByText } = render(<Task />);
    expect(queryByTestId("task")).toBeTruthy();
  });
});
