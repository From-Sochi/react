import React, { useState } from "react";
import "./new-task-form.css";

const NewTaskForm = ({ createNewTask }) => {
  const [taskDescription, setTaskDescription] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && taskDescription.trim() !== "") {
      createNewTask(taskDescription);
      setTaskDescription("");
    }
  };

  return (
    <input
      type="text"
      className="new-todo"
      placeholder="What needs to be done?"
      value={taskDescription}
      onChange={(event) => {setTaskDescription(event.target.value)}}
      onKeyDown={handleKeyDown}
    />
  );
};

export default NewTaskForm;