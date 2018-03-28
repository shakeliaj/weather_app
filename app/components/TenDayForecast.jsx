import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class TenDayForecast extends Component {
    constructor (props) {
        super(props)
        this.getTenDayForecastConditions = this.getTenDayForecastConditions.bind(this)
        this.getForecastList = this.getForecastList.bind(this)
    }

    componentDidMount () {
        document.getElementById('forecast').style.color = 'indianred'
    }

    componentWillUnmount () {
        document.getElementById('forecast').style.color = '#383d41'
    }

    getTenDayForecastConditions () {
        var xmlHttp = new XMLHttpRequest()
        xmlHttp.open("GET", 'http://api.wunderground.com/api/6d09915ec6a6d129/forecast10day/q/MI/Detroit.json', false)
        xmlHttp.send(null)
        return xmlHttp.response
    }

    getForecastList (conditions) {
        const tenDayCast = []
        conditions.forecast.simpleforecast.forecastday.map(day => {
            const temp = `${day.high.fahrenheit}\u00B0F (${day.high.celsius}\u00B0C) / ${day.low.fahrenheit}\u00B0F (${day.low.celsius}\u00B0C)`
            tenDayCast.push(
                <tr onClick={() => this.getDetails(day)} key={day.date.day} className='text-left'>
                    <td>{day.date.weekday}</td>
                    <td>{day.conditions}</td>
                    <td><img src={day.icon_url} /></td>
                    <td>{temp}</td>
                    <td>{`${day.avehumidity}%`}</td>
                </tr>
            ) 
        })
        return (
            <tbody>
                {tenDayCast}
            </tbody>
        )
    }

    getDetails (day) {
        this.props.history.push(`/details/${day.date.day}/${day.date.month}`, {
           day: day 
        })
    }

    render() {
      const forecast = JSON.parse(this.getTenDayForecastConditions())
      return (
        <div className='panel panel-success container-forecast'>
            <div className='panel-heading'><h1>10 Day Forecast</h1></div>
            <table className='panel-body table-hover table table-default'>
                <thead>
                    <tr className='text-left'>
                        <th>Day</th>
                        <th>Conditions</th>
                        <th></th>
                        <th>Temperature (High / Low)</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                {this.getForecastList(forecast)}
            </table>
        </div>
      )
    }
  }
  
export default TenDayForecast