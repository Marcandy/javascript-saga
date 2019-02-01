import React, { Component } from 'react';
import Todos from "./Todos";
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    allTodo: [
      { id: 1, content: 'Good'},
      { id: 2, content: 'Pass'}
    ]
  }

  deleteTodo = (id) => {
    const newTodos = this.state.allTodo.filter((todo) => {
      return todo.id !== id;
    })
    this.setState({
      allTodo: newTodos
    });
  }

  addTodo = (todoContent) => {
    const newId = this.state.allTodo.length + 1;
    let newArray = [...this.state.allTodo, { id: newId, content: todoContent }];
    this.setState({
      allTodo: newArray,
    }, () => {
      console.log(this.state);
    });
  }
  render() {
    const { allTodo } = this.state;
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> List of Todos</h1>
        <Todos
          allTodo={allTodo}
          deleteTodo={this.deleteTodo}
        />
        <AddTodo
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
