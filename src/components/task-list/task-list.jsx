// import React from "react";
// import "./task-list.css";
// import Task from "../task/task";

// const TaskList = (props) => {
//   const { tasks, toggleTaskStatus, deleteTask } = props;

//   return (
//     <ul className="todo-list">
//       {tasks.map((task) => (
//         <Task
//           key={task.id}
//           task={task}
//           toggleTaskStatus={toggleTaskStatus}
//           deleteTask={deleteTask}
//         />
//       ))}
//     </ul>
//   );
// };

// export default TaskList;

import React from "react";
import "./task-list.css";
import Task from "../task/task";

const TaskList = ({ tasks, toggleTaskStatus, deleteTask, filter }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    } else if (filter === "completed") {
      return task.completed;
    } else {
      return true;
    }
  });

  return (
    <ul className="todo-list">
      {filteredTasks.map((task) => (
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
