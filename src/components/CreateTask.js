import React, { useEffect, useRef } from "react";

export const CreateTask = ({ tasks, handleSubmit, handleChange, title }) => {
  const inputRef = useRef();
  useEffect(() => inputRef.current.focus(), [tasks.length]);

  return (
    <form className="create-task" onSubmit={handleSubmit}>
      <input
        className="create-task__task-title"
        type="text"
        ref={inputRef}
        onChange={handleChange}
        value={title}
      />
      <button className="create-task__create-button" type="submit">
        Create
      </button>
    </form>
  );
};
