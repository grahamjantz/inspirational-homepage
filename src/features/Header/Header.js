import React from 'react'
import Quote from './Quote/Quote'
import Weather from './Weather/Weather'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <Quote />
        <Weather />
    </div>
  )
}

export default Header