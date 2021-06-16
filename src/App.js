import React, { useState } from "react";
import { CreateTask } from "./components/CreateTask";
import { TaskFilters } from "./components/TaskFilters";
import { TaskList } from "./components/TaskList";

const App = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const [filterType, setFilterType] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title) {
      addTask(title);
      setTitle("");
    }
    return null;
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const addTask = (title) => {
    setTasks((currentTasks) => [...currentTasks, { title, status: "New" }]);
  };

  const updateTask = (index, currentValue) => {
    let newTasks = [...tasks];
    newTasks[index].title = currentValue;
    setTasks(newTasks);
  };

  const updateTaskStatus = (index, currentValue) => {
    let newTasks = [...tasks];
    newTasks[index].status = currentValue;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const filterTasks = (statusType) => {
    setFilterType(statusType);
  };

  const resetFilters = () => {
    setFilterType(null);
    console.log(`Filter type reset to: ${filterType}`);
  };

  return (
    <div className="App">
      <CreateTask
        tasks={tasks}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        title={title}
      />
      <TaskFilters filterTasks={filterTasks} resetFilters={resetFilters} />
      <TaskList
        tasks={tasks}
        filterType={filterType}
        resetFilters={resetFilters}
        updateTask={updateTask}
        updateTaskStatus={updateTaskStatus}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
