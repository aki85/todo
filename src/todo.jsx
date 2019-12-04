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

  onListInput = (index, e) => {
    if (30 < e.target.value.length) return;
    const { todos } = this.state
    todos[index] = e.target.value
    this.setState({ todos })
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
    const { todos } = this.state
    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
    })
  }

  render() {
    const { isAdmin } = this.props
    const { todos } = this.state
    let headerText = 'Todo List'
    if (isAdmin) {
      headerText = 'Todo List for Admin'
    }
    return (<div className="todo">
      <header>{headerText}</header>
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
          {todos.map((todo, index) => {
            const reversedIndex = todos.length - index - 1
            return (<li key={reversedIndex}>
              <FormControl
                className="list-form"
                value={this.state.todos[reversedIndex]}
                onInput={(e) => this.onListInput(reversedIndex, e)}
              />
              {isAdmin && <a tabIndex="-1" onClick={() => { this.removeTodo(reversedIndex) }}><i className="fa fa-times"></i></a>}
            </li>)
          })}
        </ul>
      </div>
      <footer>
        <div>created by akic. <a href="https://github.com/aki85/todo">github</a></div>
      </footer>
    </div>)
  }
}