export interface IUser {
  username: string;
  password: string;
}
export interface ITask {
  cateogry: string;
  title: string;
  id: string;
  handleRemoveTask?: (id: string) => void;
}
export interface IProps extends ITask {
  handleRemoveTask: () => void;
}
export interface IState {
  user: IUser;
  isAuthorized: boolean;
  tasks: ITask[] | [];
}
