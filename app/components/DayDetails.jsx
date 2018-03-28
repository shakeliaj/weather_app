import React, { Component } from 'react'

class DayDetails extends Component {
    constructor (props) {
        super(props)
        this.getDetails = this.getDetails.bind(this)
    }

    getDetails (day) {
        const location = 'Detroit, MI, US'
        const weather = day.conditions
        const humidity = `${day.avehumidity}%`
        const conditionsImg = day.icon_url
        const tempF = `${day.high.fahrenheit}\u00B0F / ${day.low.fahrenheit}\u00B0F`
        const tempC = `${day.high.celsius}\u00B0C / ${day.low.celsius}\u00B0C`        
        return (
            <div>
                <h3>{weather}</h3>
                <h1>{location}</h1>
                <img className='text-center' src={conditionsImg} />
                <h2>{tempF}</h2>
                <h6>{tempC}</h6>
                <h5>Humidity {humidity}</h5>
            </div>
        )
    }

    render() {
      const conditions = this.props.location.state.day
      const date = `${conditions.date.monthname}, ${conditions.date.day}, ${conditions.date.year}`
      return (
        <div className='weather panel panel-success container container-details'>
            <div className='panel-heading'><h1>{date}</h1></div>
            <div className='panel-body'>
                {this.getDetails(conditions)}
            </div>
        </div>
      )
    }
  }
  
export default DayDetails
		