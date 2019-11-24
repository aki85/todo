import React, { Component } from 'react'
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap'
export default class Todo extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      name: ''
    }
  }

  onInput = (e) => {
    if (30 < e.target.value.length) return;
    this.setState({
      name: e.target.value
    })
  }

  addTodo = (e) => {
    e.preventDefault()
    const { todos, name } = this.state
    if (!name) return
    this.setState({
      todos: [...todos, name],
      name: ''
    })
  }

  removeTodo = (index) => {
    const { todos, name } = this.state
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    })
  }

  render() {
    const { todos } = this.state
    return (<div className="todo">
      <header>Todo List</header>
      <div className="main">
        <Form onSubmit={this.addTodo.bind(this)}>
          <InputGroup className="mb-3">
            <FormControl
              value={this.state.name}
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
            <a tabIndex="-1" onClick={() => { this.removeTodo(index) }}><i className="fa fa-times"></i></a>
          </li>)}
        </ul>
      </div>
      <footer>
        <div>created by akic. <a href="https://github.com/aki85/todo">github</a></div>
      </footer>
    </div>)
  }
}