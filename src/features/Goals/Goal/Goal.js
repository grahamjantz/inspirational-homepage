import React from 'react'
import './Goal.css'
import { FaWindowClose, FaCheckSquare} from "react-icons/fa";
import { addGoal, removeGoal, toggleCompleted } from '../goalsSlice'
import { useDispatch } from 'react-redux';

const Goal = ({ goal }) => {

  const dispatch = useDispatch()

  return (
    <div className={`goal ${goal.isComplete ? 'complete' : 'incomplete'} panel`}>
        <div className='goal-buttons'>
          <button 
            className='goal-button'
            onClick={() => dispatch(toggleCompleted(goal.id))}
          >
            <FaCheckSquare size={25}/>
          </button>
          <button 
            className='goal-button'
            onClick={() => dispatch(removeGoal(goal.id))}
          >
            <FaWindowClose size={25}/>
          </button>
        </div>
        <p>{goal.text}</p>
    </div>
  )
}

export default Goal