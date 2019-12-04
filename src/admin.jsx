import React, { Component } from 'react'
import Todo from './todo'

export default class Admin extends React.Component {

  render() {
    return <Todo isAdmin/>
  }
}