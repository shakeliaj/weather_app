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
        const dayImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAh1BMVEX////91jP0lAvyqwzyrhT1mBb92TT91i/91Sn91Bz91CP///30kgf/+/DyqQj/+ef921f//fb/99/+7LH+77z+66z7yDT+5pT+8cX90gD6zTH92k/91z7932394Xr93WP+44P1uCD+6qT/9df3qyj/9ND+5Y3ziwD1oRz4vyz4tyv+55z4sSU4UITSAAAG/klEQVRogcWbaZ+iPAzAh1GBllEOEeUQD1ZX1/n+n++pSKE3AY8n+27mt/4naZqkSfz6Gi9x/MR/fkI2CG3+D27kEIk+zw0L17LcIvw4OCBcQg4+zS2RVQsqP8u9pVYj6e2T3LjlEvI7LtU8UF6YDcMlZPWl8uZPgDcpwvuNJ/yUXCQW7LjypfJO+6fO4IYtC+PiXLHseeFanLg5r5xXnQuM3WfcrqwRDsb5OqJsLxC490vV/WFetM4xJiZxAtFScAlzalMHo+Do1x+8xSKXWGXbQPxjUFPrH44/ZJ9lOAjvVlWcK7gEkm/C0F/uEOqOP61Gg6uU/3gXpcixlOKkSPwlWo4Gr5CaAhN3PxpcSm40RJzdWK4XaOwKBBdjvcsvdGCbFS0Zjc3WlfKICSlLDr9/LjPy73C4JllGfqgEj43isQwm0H+X2ffPXb6/f2aTBZHJ9JBkCjY+jwSfsUT9vdREKrPppBZCn14zET3au3bcEdv29fKXpTLgB/yQCOCRhVHI+ZZ9nQlUAXxHTxNO65G1YMRw7eRbokrgO3vCGnxk+Xtrj9jOLrK2SjBBHzo3G1MKzqtzG7bsg1JdNZgo3R01Pg5Aen613Ackk7e+/EeDVYPvXtaRywjiYKF/OpZBgZDbFTd2NtNy1WCCnrZkF+XbdRzN9UXBfLMuc5LZXL6g0niVGcz5mONilBa7/aoKlfRNil05NNuJ2qt6wATNhxPHuefyvLwpoqilyAh28teANYFFcqM8smTwTa5piL5GrglMyLIiFlZUJZUENp9vH3gyUZCRysdzydYGfwaAGd+m4irTxlHIgvalj9uj8eIgHrM6Q0e8xva/Xm4PeLLgcwZxX3UxxKfBrBfbCxaPWfeqWbK2Bhi6H7yYcirrspXPBC37CuD2a7xgawN9YbDt6mgbwu0HTyaMyniv4TIPfYhngcCLa0dGJx143oVNEBei8aSzdK7PkPTNAlQYAu6ulKnabZsbEJcGatzGL9PDInxo3JeUBoFpsjBZmj7TbH2xMwJ8MEePh8aPEJLNYFwQmNra9FwOc3eQpWHgxtaGB42fN0cMtTQQfG2cS9cTObX9K6BPQ8FNwHZydW6K21oPkpcGgNsL5Qa+gnvsWjZ9ldZQcFt9uYUcNM9dZwkatuDgNng5YmL0tkwqhvsWFMwkinTFcudcuw5UAgwCs7VXuu+4lcv1s4pXgydcHYJ29CUTY77KK6BxCw7mPh/nD+c+ClwCfrnGPODh3CuhUfp+je9vqFhw6FrAKQIOLkRyPUE5C+T3a2zhoI6eK6EJ/XYwog39DU9+NzhddwnRYm7yywMIf48dbkIWMrHrvZHLwUKi6Jz79UmCidVuIaXGMz1o2LNpCLhrh+BAUWquaAh7dSHQPVZRqe440RoE7NbDKhAHrVXYr7YlD/cuWM11oFztIIrW82DvgoGbAkT/WPz62j+uc/ZacHO+Kz2XgsH1LewJ0yhsmEJ5TfsFbGsQmFra8GbzaeCE2hoEphHa8Ept2z7QQhPyMKfxEuvu0hfb6MpgzzYImEYPw/s4Ypo+MPcCNF+6BKEfZLPNTJjKAHD3kfpuEzu1hZ1yf4ONyYja/hrfsC5eAp6wH6kLXWsODEqOvb1Mrn2r64IIY2qIf/W1jfmGtWaEfhJHA6aBEwgstejV3VtxWtw/CukFi4MYd6sCy1On/pBtnkkk0iTbUdh6o1gIsH97brNx/HOVB0+qUqBUrdLYf8YPvKRJyF1lxVx3qxgs9pINIz4VlxTzir6PF1ar/a5IETdjNEcwLViyczNc3OrKH28exedt7qL2tU48bPgYl/OrOxNZQXk8+X2z5DA6rYt2cH3VD/rU4MW0vUeE6RbBfln54K2ysJ2M3DcEhoCZLQHXKeNq6MaP14VQrblVywnMxAdvR60ZMemZKP0Xto6xODCz8nwMVkiTdqJCC+AFc7rW+CWjeSFsC/B7PhKY07a29Ni1KmGgbNvZ74xnd2DFltH4RTJ5c862kt/LdwevwfVi1VXeqxq/OqfaFbSJ3sm/y2xGnrI/PwQ8nR6uqm0AU3HXJyep6dfCSZmQZUm9vGbplufGr0f6T+0KGt8sZgnldYUhosr6QNk+s5f5zNKvsJPiYJIydRhHTOVPLKJym+MOQrt1fJR6vQ9BxW5nIa5sG7TLJYhPwY8t59p0ip1J8utbSFL5pixQZ5HU0PLok8e6IL/Xze9ONFxaL/vxzqF9uvSZHXriXS62zifOTdYimbuw/jJw64Vy07i4V84pKqXdfbEgldpm0a0gXqgs3qGyWaquBL9Fj1WE6JaO3X81Cbsqql2BfMvXc/z24jjWZ7//Q/OHg1ST2XdKsyTzP3zH64bEi/QpIZdK239+q3hB+uEvWVEJ1X1+oPwH8gqa4tUUxWkAAAAASUVORK5CYII='        
        const tempF = `${conditions.history.observations[0].tempi}\u00B0F`
        const tempC = `${conditions.history.observations[0].tempm}\u00B0C`
        
        return (
            <div>
                <h3>{weather}</h3>
                <h1>{location}</h1>
                <img className='text-center' src={dayImg} />
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