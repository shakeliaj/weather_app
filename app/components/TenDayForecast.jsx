import React, { Component } from 'react'

class TenDayForecast extends Component {
    constructor (props) {
        super(props)
        this.getTenDayForecast = this.getTenDayForecast.bind(this)
    }

    componentDidMount () {
        document.getElementById('forecast').style.color = 'indianred'
    }

    componentWillUnmount () {
        document.getElementById('forecast').style.color = '#383d41'
    }

    getTenDayForecast () {
        var xmlHttp = new XMLHttpRequest()
        xmlHttp.open("GET", 'http://api.wunderground.com/api/6d09915ec6a6d129/forecast10day/q/MI/Detroit.json', false)
        xmlHttp.send(null)
        return xmlHttp.response
    }

    render() {
      const forecast = JSON.parse(this.getTenDayForecast())
      console.log('forecast', forecast)        
      return (
        <div className='container-forecast'>
            <h1>10 Day Forecast</h1>
            <table className='table table-default'>
                <tbody>
                    <tr><td>something</td></tr>
                </tbody>
            </table>
        </div>
      )
    }
  }
  
export default TenDayForecast