import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { StatusFilters } from "../filters.feature/filtersSlice";

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? "" : "s";
  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> item{suffix} left
    </div>
  );
};

const StatusFilter = ({ value: status, onChange }) => {
  console.log(status);
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];
    const handleClick = () => onChange(value);
    console.log(value);
    const className = value === status ? "selected" : "";

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    );
  });

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};

const Footer = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => {
    console.log(state);
    return state.filters;
  });
  console.log(status);
  const todosRemaining = useSelector((state) => {
    const uncompeltedTodos = state.todos.filter((todo) => !todo.completed);
    console.log(uncompeltedTodos);
    return uncompeltedTodos.length;
  });
  const onMarkCompletedClicked = () => dispatch({ type: "TODOS_COMPLETE" });
  const onMarkClearCompleted = () => dispatch({ type: "TODOS_CLEAR_COMPLETE" });
  const onStatusChange = (status) =>
    dispatch({ type: "FILTERS_STATUS_FILTER_CHANGED", payload: status });
  return (
    <footer className="footer">
      <div className="actions">
        <h5>ACTIONS</h5>
        <button className="button" onClick={onMarkCompletedClicked}>
          Mark all completed ✅
        </button>
        <button className="button" onClick={onMarkClearCompleted}>
          Clear completed ❌
        </button>
      </div>
      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
    </footer>
  );
};
export default Footer;
