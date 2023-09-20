import React from "react";
import "./footer.css";
import TasksFilter from "../tasks-filter/tasks-filter";

const Footer = ({ filter, onFilterChange, tasksCount }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksCount} items left</span>
      <TasksFilter filter={filter} onFilterChange={onFilterChange} />
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
};

export default Footer;
