import React, { useState } from "react";
import { nanoid } from 'nanoid';
import "./app.css";
import Tasklist from "../task-list/task-list";
import Footer from "../footer/footer";
import NewTaskForm from "../new-task-form/new-task-form";

const App = () => {

// Функция генерации id
const generateId = () => {return nanoid(6)}


//Передаваемые задачи
  const [tasks, setTasks] = useState([
    {
      id: generateId(),
      description: "Completed task",
      created: "17 seconds ago",
      completed: true,
    },
    {
      id: generateId(),
      description: "Editing task",
      created: "5 minutes ago",
      completed: false,
    },
    {
      id: generateId(),
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

  //Функция добавления новой задачи
  const createNewTask = (taskDescription) => {
    const newTask = {
      id: generateId(),
      description: taskDescription,
      created: "just now",
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm
        createNewTask={createNewTask} />
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

