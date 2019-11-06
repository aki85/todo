import React, { Component } from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
export default class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: ''
    };
  }

  onInput = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  addTodo = (e) => {
    e.preventDefault();
    const { todos, name } = this.state;
    this.setState({
      todos: [...todos, name]
    });
  }

  removeTodo = (index) => {
    const { todos, name } = this.state;
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    });
  }

  render() {
    const { todos } = this.state;
    return (<div className="todo">
      <header>Todo List</header>
      <div className="main">
        <Form onSubmit={this.addTodo.bind(this)}>
          <InputGroup className="mb-3">
            <FormControl
              onInput={this.onInput}
            />
            <InputGroup.Append>
              <Button type="submit" variant="outline-secondary">登録</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        <ul>
          {todos.map((todo, index) => <li key={index}>
            <span>{todo}</span>
            <Button variant="danger" onClick={() => { this.removeTodo(index) }}>削除</Button>
          </li>)}
        </ul>
      </div>
      <footer>this is footer</footer>
    </div>);
  }
}