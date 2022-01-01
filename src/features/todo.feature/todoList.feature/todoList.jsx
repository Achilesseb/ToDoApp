import React from "react";
import ToDoListItem from "../todoListItems.feature/todoListItem";
import { useSelector } from "react-redux";
import { selectFilteredTodosIds } from "../todoReducerSlice/todoSlice";

import "./todoList.feature.styles.scss";

const ToDoList = () => {
  const todosId = useSelector(selectFilteredTodosIds);
  const renderListItems = todosId.map((todoId) => {
    return <ToDoListItem key={todoId} id={todoId} />;
  });
  return <ul className="todo-list">{renderListItems}</ul>;
};
export default ToDoList;
