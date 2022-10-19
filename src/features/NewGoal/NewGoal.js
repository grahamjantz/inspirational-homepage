import React, { useState } from 'react'
import './NewGoal.css'

const NewGoal = () => {

  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text)
    setText('')
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
          />
          <input type='submit' className='goal-submit'/>
        </form>
    </div>
  )
}

export default NewGoal