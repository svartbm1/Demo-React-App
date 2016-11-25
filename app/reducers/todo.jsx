import { ADD_TODO, REQUEST_TODOS, RECEIVE_TODOS, REQUEST_ERROR } from 'actions/types';

const initState = {
  loading: false,
  todos: [],
}

export function todoReducer(state = initState , action){
  switch (action.type) {
    case REQUEST_TODOS:
      return {
        ...state,
        loading: true,
      }
    case RECEIVE_TODOS:
      return {
        ...state,
        loading: false,
        todos: action.todos,
      }
    case REQUEST_ERROR:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}
