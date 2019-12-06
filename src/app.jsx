import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './home'
import Admin from './admin'

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/admin' component={Admin} />
    </div>
  </BrowserRouter>
)

export default App