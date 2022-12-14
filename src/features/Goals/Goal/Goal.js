import React from 'react'
import './Goal.css'
import { FaWindowClose, FaCheckSquare} from "react-icons/fa";
import { removeGoal, toggleCompleted } from '../goalsSlice'
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
            <FaCheckSquare size={35} />
          </button>
          <button 
            className='goal-button'
            onClick={() => dispatch(removeGoal(goal.id))}
          >
            <FaWindowClose size={35}/>
          </button>
        </div>
        <p className='goal-text'>{goal.text}</p>
    </div>
  )
}

export default Goal