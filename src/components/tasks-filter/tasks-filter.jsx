import React from "react";
import "./tasks-filter.css";

const TasksFilter = ({ filter, onFilterChange }) => {
  const handleAllClick = () => {
    onFilterChange("all");
  };

  const handleActiveClick = () => {
    onFilterChange("active");
  };

  const handleCompletedClick = () => {
    onFilterChange("completed");
  };

  return (
    <ul className="filters">
      <li>
        <button
          className={filter === "all" ? "selected" : ""}
          onClick={handleAllClick}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={filter === "active" ? "selected" : ""}
          onClick={handleActiveClick}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={filter === "completed" ? "selected" : ""}
          onClick={handleCompletedClick}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TasksFilter;
