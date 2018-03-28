import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FooterNav extends Component {
    render() {
      return (
        <div className='container-footer fixed-bottom alert alert-secondary'>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to='/yesterday' className='nav-link'>
                        <h4 className='nav-item' id='yesterday'>Yesterday</h4>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/today' className='nav-link'>
                        <h4 className='nav-item' id='today'>Today</h4>
                    </Link>                
                </li>
                <li className="nav-item">
                    <Link to='/ten-day-forecast' className='nav-link'>
                        <h4 className='nav-item' id='forecast'>10-Day Forecast</h4>
                    </Link>   
                </li>
            </ul>
        </div>
      )
    }
}
  
export default FooterNav

