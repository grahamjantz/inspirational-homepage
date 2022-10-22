import React, { useState } from 'react'
import './NewGoal.css'

import { useDispatch } from 'react-redux'
import { addGoal } from '../Goals/goalsSlice'

const NewGoal = () => {

  const dispatch = useDispatch()

  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text !== '') {
      dispatch(addGoal(text))
      setText('')
    }
  }


  return (
    <div className='new-goal panel'>
        <h1>What's on your mind?</h1>
        <form className='new-goal-form' onSubmit={handleSubmit}>
          <input 
            className='goal-input'
            type='text'
            value={text}
            onChange={handleChange}
            placeholder='Enter Note'
          />
          <input type='submit' className='goal-submit'/>
        </form>
    </div>
  )
}

export default NewGoal