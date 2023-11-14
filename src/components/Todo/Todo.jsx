import React from 'react';
// import css from './FeedbackOptions.module.css';

const Form = ({ todo }) => {
  console.log('todo:', { todo });
  return (
    <div>
      <li>{todo.name}</li>
      <p>:{todo.number}</p>
      <button>Delete</button>
    </div>
  );
};

export default Form;
