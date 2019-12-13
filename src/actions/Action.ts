import React from "react";
import axios from "axios";
export const FETCH_DATA: string = "FETCH_DATA";
export const AUTHORIZED_USER: string = "AUTHORIZED_USER";
export const ADD_TASK: string = "ADD_TASK";
export const REMOVE_TASK: string = "REMOVE_TASK";
export const fetchingData = () => {
  return (dispatch: React.Dispatch<any>) => {
    axios.get("./data.json").then(({ data }) =>
      dispatch({
        type: FETCH_DATA,
        payload: {
          user: data.user,
          tasks: data.tasks
        }
      })
    );
  };
};
