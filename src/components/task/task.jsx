import React from "react";
// import NewTaskForm from "../new-task-form/new-task-form";
import "./task.css";

const Task = (props) => {
  const { description, created, completed } = props.task;
  
  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{description}</span>
          <span className="created">created {created}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
};

export default Task;
