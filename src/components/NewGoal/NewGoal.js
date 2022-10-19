import React from 'react'
import './NewGoal.css'

const NewGoal = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hi')
  }

  return (
    <div className='new-goal panel'>
        <h1>What's on your mind?</h1>
        <form className='new-goal-form' onSubmit={handleSubmit}>
          <input type='text' className='goal-input'/>
          <input type='submit' className='goal-submit'/>
        </form>
    </div>
  )
}

export default NewGoal