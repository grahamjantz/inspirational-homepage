import React from 'react'
import './Goals.css'
import Goal from './Goal/Goal'
// import { useSelector } from 'react-redux'
// import store from '../../store  '

// const selectGoals = (state) => state.goals.map((goal) => goal.id)

// const state = store.getState()

const Goals = () => {

  const goalsArray = []

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