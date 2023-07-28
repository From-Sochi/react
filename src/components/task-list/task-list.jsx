import React from "react";
import "./task-list.css";
import Task from "../task/task";

const TaskList = (props) => {
  const { tasks, toggleTaskStatus, deleteTask } = props;

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task 
          key={task.id} 
          task={task} 
          toggleTaskStatus={toggleTaskStatus} 
          deleteTask={deleteTask} 
        />
      ))}
    </ul>
  );
};

export default TaskList;