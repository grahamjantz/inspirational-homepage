import React from 'react'
import './Goals.css'
import Goal from './Goal/Goal'

const Goals = () => {

  const goalsArray = [
    {
      id: 1,
      goal: 'code',
      isComplete: true,
    },
    {
      id: 2,
      goal: 'code more',
      isComplete: false,
    },
    {
      id: 3,
      goal: 'code forever',
      isComplete: false,
    },
    {
      id: 4,
      goal: 'code forever',
      isComplete: false,
    },
    {
      id: 5,
      goal: 'code forever',
      isComplete: false,
    },
    {
      id: 6,
      goal: 'code forever',
      isComplete: false,
    },
    {
      id: 7,
      goal: 'code forever',
      isComplete: false,
    },
  ]

  return (
    <div className='goals panel'>
        {goalsArray.map(goal => {
          return (
            <Goal
              key={goal.id} 
              goal={goal.goal}
              isComplete={goal.isComplete}
            />
          )
        })}
    </div>
  )
}

export default Goals