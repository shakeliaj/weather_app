import React, { Component } from 'react'

class Yesterday extends Component {
    constructor (props) {
        super(props)
        this.getYesterdaysConditions = this.getYesterdaysConditions.bind(this)
        this.getYesterday = this.getYesterday.bind(this)
    }

    componentDidMount () {
        document.getElementById('yesterday').style.color = 'indianred'
    }

    componentWillUnmount () {
        document.getElementById('yesterday').style.color = '#383d41'
    }

    getYesterdaysConditions () {
        var xmlHttp = new XMLHttpRequest()
        xmlHttp.open("GET", 'http://api.wunderground.com/api/6d09915ec6a6d129/yesterday/q/MI/Detroit.json', false)
        xmlHttp.send(null)
        return xmlHttp.response
    }

    getYesterday (conditions) {
        const location = 'Detroit, MI, US'
        const weather = conditions.history.observations[0].conds
        const humidity = `${conditions.history.dailysummary[0].humidity}% / ${conditions.history.dailysummary[0].maxhumidity}%`
        const img = `https://icons.wxug.com/i/c/k/${conditions.history.observations[0].icon}.gif`
        const tempF = `${conditions.history.observations[0].tempi}\u00B0F`
        const tempC = `${conditions.history.observations[0].tempm}\u00B0C`
        
        return (
            <div>
                <h3>{weather}</h3>
                <h1>{location}</h1>
                <img className='text-center' src={img} />
                <h2>{tempF}</h2>
                <h6>{tempC}</h6>
                <h5>Humidity {humidity}</h5>
            </div>
        )
    }

    render() {
      const yesterday = JSON.parse(this.getYesterdaysConditions())
      const date = yesterday.history.date.pretty        
      return (
        <div className='weather panel panel-success container container-yesterday'>
            <div className='panel-heading'><h1>{date}</h1></div>
            <div className='panel-body'>
                {this.getYesterday(yesterday)}
            </div>
        </div>
      )
    }
  }
  
export default Yesterday