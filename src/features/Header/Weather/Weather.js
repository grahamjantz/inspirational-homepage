import React from 'react'
import './Weather.css'
import { TiWeatherSunny } from "react-icons/ti";

const Weather = () => {
  return (
    <div className='weather panel'>
        <TiWeatherSunny 
          className='weather-icon'
          size={30}
        />
        <p className='temp'>25°C</p>
    </div>
  )
}

export default Weather