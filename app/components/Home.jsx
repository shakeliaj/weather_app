import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Navigation from './Navigation.jsx'
import FooterNav from './FooterNav.jsx'
import Today from './Today.jsx'
import Yesterday from './Yesterday.jsx'
import TenDayForecast from './TenDayForecast.jsx'

class Home extends Component {
    componentDidMount () {
        if (this.props.location.pathname === '/') {
            document.getElementById('home').style.color = 'indianred'            
        }   
    }

    componentDidUpdate () {
        if (this.props.location.pathname !== '/') {
            document.getElementById('home').style.color = '#383d41'            
        } else {
            document.getElementById('home').style.color = 'indianred'            
        }
    }
    render() {
      return (
        <div className='page-wrapper'>
          <Navigation />
          <Route exact path='/today' component={Today} />
          <Route exact path='/yesterday' component={Yesterday} />
          <Route exact path='/ten-day-forecast' component={TenDayForecast} />
          <FooterNav />
        </div>
      )
    }
  }
  
export default Home