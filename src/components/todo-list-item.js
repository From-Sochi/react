import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {

  const Style = {
    color: important ? 'tomato' : 'black'
  }

  return (
  <span className='todo-list-item' style={Style}>
    {label}
    </span>);
};

export default TodoListItem;
