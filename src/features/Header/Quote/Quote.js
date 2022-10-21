import React, { useEffect } from 'react'
import './Quote.css'

import { useDispatch, useSelector } from 'react-redux'
import { addQuote, selectQuote, fetchQuote } from './quoteSlice'

const placeholderQuote = {
  text: 'We cannot solve problems with the kind of thinking we employed when we came up with them.',
  author: 'Albert Einstein'
}

const Quote = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addQuote(placeholderQuote))
    dispatch(fetchQuote())
  }, [dispatch])

  const quote = useSelector(selectQuote)

  return (
    <div className='quote panel'>
        <h2 className='quote-heading'>{`'${quote.text}'`}</h2>
        <h2 className='quote-author'> -{quote.author} </h2>
    </div>
  )
}

export default Quote