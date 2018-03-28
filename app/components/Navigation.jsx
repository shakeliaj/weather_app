import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    constructor (props) {
        super(props)
        this.goBack = this.goBack.bind(this)
    }

    goBack () {
        this.props.history.goBack()
    }

    render() {
      return (
        <div className='container-navigation fixed-top alert alert-info'>
            <i id='back' onClick={() => this.goBack()} className='fa fa-arrow-left' />           
            <Link to='/'><i id='home' className='fa fa-home' /></Link>
            <h1>Weather</h1>
        </div>
      )
    }
}
  
export default Navigation