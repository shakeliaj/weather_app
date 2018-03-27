import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
      return (
        <div className='container container-navigation'>
            <ul><Link to='/ten-day-forecast'>Hello</Link></ul>
        </div>
      )
    }
}
  
export default Navigation