import React from "react";
import "./task.css";

const Task = (props) => {
  const { id, description, created, completed } = props.task;
  
  const handleToggleTaskStatus = () => {
    props.toggleTaskStatus(id);
  };

  const handleDeleteTask = () => {
    props.deleteTask(id);
  };

  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input 
          className="toggle" 
          type="checkbox" 
          checked={completed} 
          onChange={handleToggleTaskStatus}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">created {created}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={handleDeleteTask}></button>
      </div>
    </li>
  );
};

export default Task;