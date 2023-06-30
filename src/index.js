import React from 'react';
import ReactDOM from 'react-dom';

import Search from './components/search';
import Title from './components/title';
import TodoList from './components/todo-list';


const App = () => {

  // const isLogged = false;
  // const loginBox = <apan>log in please</apan>
  // const welcome = <apan>welcom back</apan>;
  const todoData = [
    { label: 'drink coffee', important: false },
    { label: 'awesome app', important: true },
    { label: 'drink cacao', important: false },
  ]


  return (
    <div>
      {/* <span>{isLogged ? welcome : loginBox}</span> */}
      <Title />
      <Search />
      <TodoList todos={todoData} />
    </div>
  );
};



ReactDOM.render(<App />, document.getElementById('root'))
