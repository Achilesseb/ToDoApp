const initialState = [];
function nextToDoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}
const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TODOS_ADD_TODO": {
      return [
        ...state,
        {
          id: nextToDoId(state),
          text: action.payload,
          completed: false,
        },
      ];
    }
    case "TODOS_TOGGLE_TODO": {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    }
    case "TODOS_DELETE": {
      return state.filter((todo) => todo.id !== action.payload);
    }

    case "TODOS_COLOR_SELECTED": {
      const { color, todoId } = action.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          color,
        };
      });
    }
    default:
      return state;
  }
};
export default toDoReducer;
