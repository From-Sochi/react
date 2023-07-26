import React from "react";

import "./app.css";
// import Task from "../task/task";
import Tasklist from "../task-list/task-list";
import Footer from "../footer/footer";
import NewTaskForm from "../new-task-form/new-task-form";

const App = () => {
  const tasks = [
    {
      id: 1,
      description: 'Completed task',
      created: '17 seconds ago',
      completed: true,
    },
    {
      id: 2,
      description: 'Editing task',
      created: '5 minutes ago',
      completed: false,
    },
    {
      id: 3,
      description: 'Active task',
      created: '5 minutes ago',
      completed: false,
    },
  ];

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm />
      </header>
      <section className="main">
        <Tasklist tasks={tasks} />
      </section>
      <Footer />
    </section>
  );
};

export default App;



