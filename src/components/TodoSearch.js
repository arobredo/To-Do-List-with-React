import React, { useState } from "react";

const TodoSearch = ({searchTask}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    searchTask(value);
    setValue("");
  };

  return (
    <form className="TodoInput" onSubmit={handleSubmit1}>
      <input
        className="todo-input"
        type="text"
        value={value}
        placeholder="What task are you searching for?"
        onChange={handleChange}
      ></input>
      <button className="todo-btn" type="submit">
        Search Task
      </button>
    </form>
  );
};

export default TodoSearch;
