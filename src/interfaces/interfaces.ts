import React from "react";
export interface IUser {
  username: string;
  password: string;
}
export type handleRemoveTask = (
  id: string,
  e?: React.MouseEvent<SVGAElement, React.MouseEvent>
) => void;
export interface ITask {
  cateogry: string;
  title: string;
  id: string;
  date: Date;
  handleRemoveTask?: handleRemoveTask;
}
export interface IProps extends ITask {
  handleRemoveTask: () => void;
}
export interface IState {
  user: IUser;
  isAuthorized: boolean;
  tasks: ITask[] | [];
}
