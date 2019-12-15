import {
  FETCH_DATA,
  AUTHORIZED_USER,
  ADD_TASK,
  REMOVE_TASK
} from "../actions/Action";
import uuid from "uuid/v4";
import { IState } from "../interfaces/interfaces";
const INITIALSTATE: IState = {
  user: {
    username: "",
    password: ""
  },
  isAuthorized: false,
  tasks: []
};
export const reducer = (state = INITIALSTATE, { type, payload }) => {
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        tasks: payload.tasks,
        user: payload.user
      };
    case AUTHORIZED_USER:
      return {
        ...state,
        isAuthorized: true
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: uuid(), ...payload }]
      };
    case REMOVE_TASK:
      let newTasks = state.tasks.filter((task: any) => task.id !== payload);
      return {
        ...state,
        tasks: state.tasks.filter((task: any) => task.id !== payload)
      };
    default:
      return state;
  }
};
