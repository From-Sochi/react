import React from 'react';
// import ReactDOM from 'react-dom/client'; /*Это в новой версии */



import Search from '../search/search';
import Title from '../title/title';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './app.css'



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
      <ItemStatusFilter />
      <TodoList todos={todoData} />
    </div>
  );
};


export default App;



