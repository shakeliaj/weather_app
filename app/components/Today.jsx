import React, { Component } from 'react'
import moment from 'moment'

class Today extends Component {
    constructor (props) {
        super(props)
        this.getToday = this.getToday.bind(this)
        this.getCurrentConditions = this.getCurrentConditions.bind(this)
    }

    componentDidMount () {
        document.getElementById('today').style.color = 'indianred'
    }

    componentWillUnmount () {
        document.getElementById('today').style.color = '#383d41'
    }

    getCurrentConditions () {
        var xmlHttp = new XMLHttpRequest()
        xmlHttp.open("GET", 'http://api.wunderground.com/api/6d09915ec6a6d129/conditions/q/MI/Detroit.json', false)
        xmlHttp.send(null)
        return xmlHttp.response
    }

    getDayNightImage(dayImg) {
        const date = new Date()
        const time = date.getHours()
        if (time <= 7 || time >= 19) {
            return 'data:image/jpeg;base64,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'    
        }
        return dayImg
    }

    getToday (conditions) {
        const location = `${conditions.current_observation.display_location.full}, ${conditions.current_observation.display_location.country}`
        const weather = conditions.current_observation.weather
        const humidity = conditions.current_observation.relative_humidity
        const dayOrNight = this.getDayNightImage(conditions.current_observation.icon_url)
        const tempF = `${conditions.current_observation.temp_f}\u00B0F`
        const tempC = `${conditions.current_observation.temp_c}\u00B0C`
        
        return (
            <div>
                <h3>{weather}</h3>
                <h1>{location}</h1>
                <img className='text-center' src={dayOrNight} />
                <h2>{tempF}</h2>
                <h6>{tempC}</h6>
                <h5>Humidity {humidity}</h5>
            </div>
        )
    }

    render() {
      const conditions = JSON.parse(this.getCurrentConditions())
      const date = moment(conditions.current_observation.observation_time_rfc822).format('MMMM Do, YYYY')
     
      return (
        <div className='weather panel panel-success container container-today'>
            <div className='panel-heading'><h1>{date}</h1></div>
            <div className='panel-body'>
                {this.getToday(conditions)}
            </div>
        </div>
      )
    }
  }
  
export default Today
		