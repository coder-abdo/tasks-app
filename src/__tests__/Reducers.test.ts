import {
  FETCH_DATA,
  AUTHORIZED_USER,
  ADD_TASK,
  REMOVE_TASK
} from "../actions/Action";
import uuid from "uuid/v4";
import { reducer } from "../reducers/RootReducer";
describe("reducers", () => {
  const INITIALSTATE = {
    user: {
      username: "",
      password: ""
    },
    isAuthorized: false,
    tasks: []
  };
  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "", payload: undefined })).toStrictEqual({
      user: {
        username: "",
        password: ""
      },
      isAuthorized: false,
      tasks: []
    });
  });
  it("should replace the tasks and user with the fetched data", () => {
    expect(
      reducer(INITIALSTATE, {
        type: FETCH_DATA,
        payload: {
          user: {
            username: "Admin",
            password: "54321"
          },
          tasks: [
            {
              id: "1",
              title: "learn react testing",
              cateogry: "studying"
            },
            {
              id: "2",
              title: "do laundry",
              cateogry: "simpleTodo"
            }
          ]
        }
      }).tasks.length
    ).toEqual(2);
    expect(
      reducer(INITIALSTATE, {
        type: FETCH_DATA,
        payload: {
          user: {
            username: "Admin",
            password: "54321"
          },
          tasks: [
            {
              id: "1",
              title: "learn react testing",
              cateogry: "studying"
            },
            {
              id: "2",
              title: "do laundry",
              cateogry: "simpleTodo"
            }
          ]
        }
      }).user
    ).toEqual({
      username: "Admin",
      password: "54321"
    });
  });
  it("should return authorized to true", () => {
    expect(
      reducer(INITIALSTATE, { type: AUTHORIZED_USER, payload: {} }).isAuthorized
    ).toEqual(true);
  });
  it("adding tasks properly", () => {
    expect(
      reducer(INITIALSTATE, { type: ADD_TASK, payload: {} }).tasks.length
    ).toEqual(1);
  });
  it("removing tasks properly", () => {
    const mockTasks = [
      {
        id: "1",
        title: "learn react testing",
        cateogry: "studying"
      },
      {
        id: "2",
        title: "do laundry",
        cateogry: "simpleTodo"
      }
    ];
    expect(
      reducer(
        { ...INITIALSTATE, tasks: mockTasks },
        { type: REMOVE_TASK, payload: "2" }
      ).tasks.length
    ).toEqual(1);
  });
});
