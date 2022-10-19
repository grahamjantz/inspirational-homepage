import React from 'react'
import './Goal.css'
import { FaWindowClose, FaCheckSquare} from "react-icons/fa";

const Goal = ({ goal, isComplete }) => {

  return (
    <div className={`goal ${isComplete} panel`}>
        <div className='goal-buttons'>
          <button className='goal-button'><FaCheckSquare size={25}/></button>
          <button className='goal-button'><FaWindowClose size={25}/></button>
        </div>
        <p>{goal}</p>
    </div>
  )
}

export default Goal