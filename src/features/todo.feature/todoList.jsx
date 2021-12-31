import React from "react";
import ToDoListItem from "./todoListItem";
import { useSelector } from "react-redux";
import { selectFilteredTodosIds } from "./todoSlice";

const ToDoList = () => {
  const todosId = useSelector(selectFilteredTodosIds);
  const renderListItems = todosId.map((todoId) => {
    return <ToDoListItem key={todoId} id={todoId} />;
  });
  return <ul className="todo-list">{renderListItems}</ul>;
};
export default ToDoList;
