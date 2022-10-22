import React from 'react'
import './Goals.css'
import Goal from './Goal/Goal'
import { useSelector } from 'react-redux'
import { selectGoals } from './goalsSlice'

const Goals = () => {

  const goalsArray = useSelector(selectGoals);

  return (
    <div className='goals panel'>
      <h2>Notes:</h2>
        {goalsArray.map(goal => {
          return (
            <Goal
              key={goal.id} 
              goal={goal}
            />
          )
        })}
    </div>
  )
}

export default Goals