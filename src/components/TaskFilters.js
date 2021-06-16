import React from "react";

export const TaskFilters = ({ filterTasks, resetFilters }) => {
  const statusTypes = ["Active", "New", "WIP", "Done"];

  return (
    <fieldset className="filters">
      <legend>Filters</legend>
      {statusTypes.map((type, index) => (
        <button
          key={index}
          className="filters__filter-button"
          onClick={(event) => filterTasks(event.target.innerHTML)}
        >
          {type}
        </button>
      ))}
      <button className="filters__filter-button" onClick={resetFilters}>
        Reset
      </button>
    </fieldset>
  );
};
