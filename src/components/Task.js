import React from "react";

export const Task = ({
  index,
  task,
  updateTask,
  updateTaskStatus,
  deleteTask,
}) => {
  const statusTypes = ["New", "Active", "WIP", "Done"];

  return (
    <div className="task-list__task">
      <input
        className="task-title"
        type="text"
        value={task.title}
        onChange={(event) => updateTask(index, event.target.value)}
      />
      <select
        className="task-status"
        onChange={(event) => updateTaskStatus(index, event.target.value)}
      >
        {statusTypes.map((type, index) => (
          <option key={index}>{type}</option>
        ))}
      </select>
      <button className="task-delete-button" onClick={() => deleteTask(index)}>
        Delete
      </button>
    </div>
  );
};
