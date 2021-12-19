import { Dispatch } from 'redux';
import { ActionTodoType, ActionAddTodoList } from '../actionTypes/typeTodo';
import { TodoList } from '../reducers/todoReducer';

export const addTodoAction = (data: TodoList) => {
  return async (dispatch: Dispatch<ActionAddTodoList>) => {
    try {
      dispatch({
        type: ActionTodoType.ADD_TODO,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTodoType.TODO_FAILED,
        payload: error,
      });
    }
  };
};

export function deleteTodoAction(id: string) {
  return {
    type: ActionTodoType.DELETE_TODO,
    payload: id,
  };
}

export function finishTodoAction(status: string, id: string) {
  return {
    type: ActionTodoType.FINISH_TODO,
    payload: status,
    payloadId: id,
  };
}

export function updateTodoAction(title: string, id: string) {
  return {
    type: ActionTodoType.UPDATE_TODO,
    payload: title,
    payloadId: id,
  };
}
