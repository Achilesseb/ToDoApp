import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};
const store = createStore(rootReducer, persistedState, composedEnhancer);
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
export default store;
