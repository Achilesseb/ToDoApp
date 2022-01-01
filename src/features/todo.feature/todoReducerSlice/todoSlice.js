import { StatusFilters } from "../../filters.feature/filtersSlice";
import { createSelector } from "reselect";

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
    case "TODOS_COMPLETE": {
      return state.map((todo) => {
        return { ...todo, completed: true };
      });
    }
    case "TODOS_CLEAR_COMPLETE": {
      return state.filter((todo) => !todo.completed);
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

export const selectToDos = (state) => state.todos;
export const selectToDoById = (state, todoId) => {
  return state.todos.find((todo) => {
    return todo.id === todoId;
  });
};
export const selectToDosId = createSelector(selectToDos, (todos) =>
  todos.map((todo) => todo.id)
);
export const selectFilteredTodos = createSelector(
  selectToDos,
  (state) => state.filters,
  (todos, filters) => {
    const { status, colors } = filters;
    const showAllCompletions = status === StatusFilters.All;
    if (showAllCompletions && colors.length === 0) {
      return todos;
    }
    const completedStatus = status === StatusFilters.Completed;
    return todos.filter((todo) => {
      const statusMatches =
        showAllCompletions || todo.completed === completedStatus;
      const colorMatches = colors.length === 0 || colors.includes(todo.color);
      console.log(colorMatches, statusMatches);
      return statusMatches && colorMatches;
    });
  }
);
export const selectFilteredTodosIds = createSelector(
  selectFilteredTodos,
  (filteredTodos) => filteredTodos.map((todo) => todo.id)
);
