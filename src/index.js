import React from 'react';
// import ReactDOM from 'react-dom'; Это в старой версии реак
import ReactDOM from 'react-dom/client'; /*Это в новой версии */



import Search from './components/search';
import Title from './components/title';
import TodoList from './components/todo-list';
import './index.css'

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



// ReactDOM.render(<App />, document.getElementById('root'))  Это в старой версии реакт
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />) /*Это в новой версии */
