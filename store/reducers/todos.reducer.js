import { CREATE_TODO } from "../actionTypes";

const initialState = {
  todos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_TODO: {
      const { id, content } = action.payload;

      return {
        ...state,
        todos: [...state.todos, content]
      };
    }

    default:
      return state;
  }
}
