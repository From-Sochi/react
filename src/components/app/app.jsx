import React, { useState } from "react";

import "./app.css";
import Tasklist from "../task-list/task-list";
import Footer from "../footer/footer";
import NewTaskForm from "../new-task-form/new-task-form";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Completed task",
      created: "17 seconds ago",
      completed: true,
    },
    {
      id: 2,
      description: "Editing task",
      created: "5 minutes ago",
      completed: false,
    },
    {
      id: 3,
      description: "Active task",
      created: "5 minutes ago",
      completed: false,
    },
  ]);

  // Функция для обновления статуса задачи
  const toggleTaskStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };

  // Функция для удаления задачи
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <Tasklist
          tasks={tasks}
          toggleTaskStatus={toggleTaskStatus}
          deleteTask={deleteTask}
        />
      </section>
      <Footer />
    </section>
  );
};

export default App;