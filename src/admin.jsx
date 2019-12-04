import React, { Component } from 'react'
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import Todo from './todo'

export default class Admin extends React.Component {

  render() {
    return <Todo isAdmin/>
  }
}