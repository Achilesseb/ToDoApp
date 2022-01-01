import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./header.feature.styles.scss";

const Header = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = (e) => {
    const trimmedText = text.trim();
    if (e.key === "Enter" && trimmedText) {
      dispatch({ type: "TODOS_ADD_TODO", payload: trimmedText });
      setText("");
    }
  };
  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="Things to Do 📝"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
};
export default Header;
