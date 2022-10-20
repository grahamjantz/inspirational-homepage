import React, { useState, useEffect } from 'react'
import './Weather.css'
import { TiWeatherSunny } from "react-icons/ti";

const Weather = () => {

  //COME BACK LATER, API KEY MIGHT NOT BE READY YET AS OF 10/19/22. OPEN WEATHER SAYS IT COULD TAKE A COUPLE HOURS.

  // const [toggleFetchWeather, setToggleFetchWeather] = useState(false)
  // const [location, setLocation] = useState()
  // const [weather, setWeather] = useState()

  // const apiKey = 'c720d2c19d91f9fcc748f8846a5f2288'
  // const url = `http://api.openweathermap.org/data/3.0/forecast?id=524901&appid=${apiKey}`

  // const handleClick = () => {
  //   toggleFetchWeather ? setToggleFetchWeather(false) : setToggleFetchWeather(true)
  // }

  // useEffect(() => {
  //   async function getData () {
  //     fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=T1K6K7,CA&appid=${apiKey}`)
  //     .then((res) => res.json())
  //     .then((resData) => {
  //       setLocation(resData)
  //     })
  //   }
  //   getData();
  // }, [toggleFetchWeather])

  /*
    Please note that using One Call 3.0 requires a separate subscription to the One Call by Call plan. Learn more here https://openweathermap.org/price. If you have a valid subscription to the One Call by Call plan, but still receive this error, then please see https://openweathermap.org/faq#error401 for more info.
  */

  // const getWeather = async () => {
  //   const res = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=${apiKey}`)
  //   const json = res.json()
  //   return json
  // }

  // console.log(getWeather())

  // console.log(toggleFetchWeather)
  // console.log(location)
  // console.log(weather)

  return (
    // <div className='weather panel' onClick={handleClick}>
    // REPLACE DIV BELOW WITH DIV ABOVE ONCE API CALLS ARE WORKING
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