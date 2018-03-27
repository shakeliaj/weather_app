import React, { Component } from 'react'
import Home from './Home.jsx'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    )
  }
}

export default App