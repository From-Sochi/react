import React from "react";
import "./task-list.css";
import Task from "../task/task";

const TaskList = (props) => {
  const { tasks } = props;

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;

