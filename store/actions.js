import { CREATE_TODO} from './actionTypes';

let nextTodoId = 0;
export const addTodo = content => ({
  type: CREATE_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
})