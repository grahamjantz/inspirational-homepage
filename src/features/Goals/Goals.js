import React from 'react'
import './Goals.css'
import Goal from './Goal/Goal'
import { useSelector } from 'react-redux'
import { selectCompletedCount, selectGoals } from './goalsSlice'

const Goals = () => {

  const goalsArray = useSelector(selectGoals);
  const completedCount = useSelector(selectCompletedCount)

  const sortedGoalsArray = [...goalsArray].sort((a, b) => {
    return Number(a.isComplete) - Number(b.isComplete);
  })

  return (
    <div className='goals panel'>
      <h2>Goals:</h2>
        {sortedGoalsArray.map(goal => {
          return (
            <Goal
              key={goal.id} 
              goal={goal}
            />
          )
        })}
        <p className='completed-count'>{completedCount}/{sortedGoalsArray.length} completed</p>
    </div>
  )
}

export default Goals