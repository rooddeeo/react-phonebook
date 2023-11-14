import React, { Component } from 'react';
import TodoList from './TodoList/TodoList.jsx';
import CreateTodoForm from './Forms/CreateTodoForm/CreateTodoForm.jsx';
import data from './listContacts.json';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: data,
    name: '',
  };

  addTodo = newTodo => {
    const todoObj = {
      ...newTodo,
      id: nanoid(),
    };
    this.setState(prev => ({ contacts: [...prev.contacts], todoObj }));
    console.log(todoObj);
  };

  render() {
    return (
      <>
        <CreateTodoForm addTodo={this.addTodo} />
        <TodoList contacts={this.state.contacts} />
      </>
    );
  }
}

export default App;
