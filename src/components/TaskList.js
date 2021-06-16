import React, { useEffect } from "react";
import { Task } from "./Task";

export const TaskList = ({
  tasks,
  filterType,
  updateTaskStatus,
  updateTask,
  deleteTask,
}) => {
  if (filterType === null) {
    return (
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            index={index}
            task={task}
            updateTaskStatus={updateTaskStatus}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    );
  } else {
    let filteredTasks = tasks.filter((task) => task.status === filterType);
    return (
      <div className="task-list">
        {filteredTasks.map((filteredTask, index) => (
          <Task
            key={index}
            index={index}
            task={filteredTask}
            updateTaskStatus={updateTaskStatus}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    );
  }
};
