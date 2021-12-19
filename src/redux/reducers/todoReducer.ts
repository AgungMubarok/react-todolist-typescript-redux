import { ActionTodoType, ActionAddTodoList } from '../actionTypes/typeTodo';

export interface TodoList {
  title: string;
  id: string;
  status: string;
}

interface State {
  todoList: TodoList[];
  error?: string | null;
}

const initS = {
  todoList: [],
  error: null,
};

export const addTodoReducers = (
  state: State = initS,
  action: ActionAddTodoList
): State => {
  switch (action.type) {
    case ActionTodoType.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case ActionTodoType.DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter(
          (item: TodoList) => item.id !== action.payload
        ),
      };
    case ActionTodoType.FINISH_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((item: TodoList) =>
          item.id === action.payloadId
            ? (item.status = action.payload)
            : item.status
        ),
      };
    case ActionTodoType.UPDATE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((item: TodoList) =>
          item.id === action.payloadId
            ? (item.title = action.payload)
            : item.title
        ),
      };
    case ActionTodoType.TODO_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
