import React, { useState, useEffect } from 'react'
import './Weather.css'
import { TiWeatherSunny } from "react-icons/ti";
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentWeather, fetchWeather } from './weatherSlice';

const Weather = () => {

  const currentWeather = useSelector(selectCurrentWeather);

  
  const dispatch = useDispatch();

  const [userCoords, setUserCoords] = useState()
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserCoords(position.coords)
    })
    
  }, [])
  
  useEffect(() => {
    dispatch(fetchWeather(userCoords)) 
  }, [userCoords, dispatch])
  

  return (
    <div className='weather panel'>
        <TiWeatherSunny 
          className='weather-icon'
          size={30}
        />
        <p className='temp'>{currentWeather}°C</p>
    </div>
  )
}

export default Weather