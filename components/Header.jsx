import React from 'react';

import todo from '../assets/todo.jpg';
import Form from './Form';

const Header = ({ taskInput, setTaskInput, handleSubmit, inputRef }) => {
  return (
    <header>
      <img src={todo} alt='logo' />
      <Form
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
      />
    </header>
  );
};

export default Header;