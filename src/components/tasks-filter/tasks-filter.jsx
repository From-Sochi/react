import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {

  const Style = {
    color: important ? 'tomato' : 'black'
  }

  return (
    <span className='todo-list-item'>
      <span className='todo-list-item' style={Style}>
        {label}
      </span>;

      <button type='button' className='btn btn-outline-succes btn-sm'>
        <i className='fa fa-exclamation' />
      </button>

      <button type='button' className='btn btn-outline-danger btn-sm'>
        <i className='fa fa-trash-o' />
      </button>

    </span>
  );
};

export default TodoListItem;
