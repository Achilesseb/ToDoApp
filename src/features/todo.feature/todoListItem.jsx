import React from "react";
import { ReactComponent as TimesSolid } from "./times-solid.svg";
import { useSelector, useDispatch } from "react-redux";
import { availableColors, capitalize } from "../filters.feature/filters.colors";
// import { selectToDoById } from "./todoSlice";
const ToDoListItem = ({ id }) => {
  const todo = useSelector((state) => {
    return state.todos.find((todo) => {
      return todo.id === id;
    });
  });
  const { text, completed, color } = todo;
  const dispatch = useDispatch();
  const colorOptions = availableColors.map((c) => (
    <option key={c} value={c}>
      {capitalize(c)}
    </option>
  ));
  const handleCompletedChange = () => {
    dispatch({ type: "TODOS_TOGGLE_TODO", payload: todo.id });
  };
  const onDelete = () => {
    dispatch({ type: "TODOS_DELETE", payload: todo.id });
  };
  const handleColorChange = (e) => {
    const color = e.target.value;
    dispatch({
      type: "TODOS_COLOR_SELECTED",
      payload: { todoId: todo.id, color },
    });
  };

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChange}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={handleColorChange}
          >
            <option value=""> </option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={onDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
};
export default ToDoListItem;
