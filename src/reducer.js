import { combineReducers } from "redux";
import toDoReducer from "./features/todo.feature/todoReducerSlice/todoSlice";
import filtersReducer from "./features/filters.feature/filtersSlice";

const rootReducer = combineReducers({
  todos: toDoReducer,
  filters: filtersReducer,
});
export default rootReducer;
