import React from 'react';
import ReactDOM from 'react-dom/client';

import Search from './components/search';
import Title from './components/title';
import TodoList from './components/todo-list';


const App = () => {

  const todoData = [
    { label: 'drink coffee', important: false, id: 1 },
    { label: 'awesome app', important: true, id: 2 },
    { label: 'drink cacao', important: false, id: 3 },
  ]

  return (
    <div>
      <Title />
      <Search />
      <TodoList todos={todoData} />
    </div>
  );
};



// ReactDOM.render(<App />, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
