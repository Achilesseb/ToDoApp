import React from "react";
import ToDoListItem from "./todoListItem";
import { useSelector, shallowEqual } from "react-redux";

const selectTodosId = (state) => {
  return state.todos.map((todo) => todo.id);
};
const ToDoList = () => {
  const todosId = useSelector(selectTodosId, shallowEqual);
  const renderListItems = todosId.map((todoId) => {
    return <ToDoListItem key={todoId} id={todoId} />;
  });
  return <ul className="todo-list">{renderListItems}</ul>;
};
export default ToDoList;
