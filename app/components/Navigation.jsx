import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
      return (
        <div className='container-navigation alert alert-secondary'>
            <Link to='/'><i id='home' className='fa fa-home' /></Link>
            <h1>Weather</h1>
        </div>
      )
    }
}
  
export default Navigation