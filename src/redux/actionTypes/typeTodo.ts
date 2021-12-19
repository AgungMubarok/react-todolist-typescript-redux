import { TodoList } from '../reducers/todoReducer';

export enum ActionTodoType {
  ADD_TODO = 'ADD_TODO',
  TODO_FAILED = 'ADD_TODO_FAILED',
  DELETE_TODO = 'DELETE_TODO',
  FINISH_TODO = 'FINISH_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
}

interface actionAddSuccess {
  type: ActionTodoType.ADD_TODO;
  payload: TodoList;
}

interface actionDeleteSuccess {
  type: ActionTodoType.DELETE_TODO;
  payload: string;
}

interface actionDoneSuccess {
  type: ActionTodoType.FINISH_TODO;
  payloadId: string;
  payload: string;
}

interface actionUpdateSuccess {
  type: ActionTodoType.UPDATE_TODO;
  payloadId: string;
  payload: string;
}

interface actionFailed {
  type: ActionTodoType.TODO_FAILED;
  payload?: string;
}

export type ActionAddTodoList =
  | actionAddSuccess
  | actionDeleteSuccess
  | actionDoneSuccess
  | actionUpdateSuccess
  | actionFailed;
