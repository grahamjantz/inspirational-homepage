import React, { useState, useEffect } from 'react'
import './Weather.css'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentWeather, fetchWeather, selectCurrentLocation, fetchLocation, selectCurrentIcon,fetchIcon } from './weatherSlice';

const Weather = () => {

  const currentWeather = useSelector(selectCurrentWeather);
  const currentLocation = useSelector(selectCurrentLocation);
  const currentIcon = useSelector(selectCurrentIcon)
  
  const dispatch = useDispatch();

  const [userCoords, setUserCoords] = useState()
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserCoords(position.coords)
    })
    
  }, [])
  
  useEffect(() => {
    dispatch(fetchWeather(userCoords)) 
    dispatch(fetchLocation(userCoords))
    dispatch(fetchIcon(userCoords))
  }, [userCoords, dispatch])
  
  return (
    <div className='weather panel'>
        <img src={`http://openweathermap.org/img/wn/${currentIcon}@2x.png`} alt=''/>
        <div className='temp'>
          <p>{currentWeather}°C</p>
          <p>{currentLocation}</p>
        </div>
    </div>
  )
}

export default Weather