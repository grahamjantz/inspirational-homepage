import React, { useState, useEffect } from 'react'
import './Quote.css'

import { useDispatch, useSelector } from 'react-redux'
import { addQuote, selectQuote } from './quoteSlice'

const placeholderQuote = {
  quote: 'We cannot solve problems with the kind of thinking we employed when we came up with them.',
  author: 'Albert Einstein'
}

const Quote = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addQuote(placeholderQuote))
  })

  const quote = useSelector(selectQuote)

  console.log(quote)

  // const [quote, setQuote] = useState(placeholderQuote.quote)
  // const [author, setAuthor] =useState(placeholderQuote.author)

  // useEffect(() => {    

  //   const url = 'https://quotes.rest/qod/?category=inspire&language=en'
    
  //   const getData = async () => {
  //     const res = await fetch(url)
  //     const data = await res.json()
  //     setQuote(data.contents.quotes[0].quote)
  //     setAuthor(data.contents.quotes[0].author)
  //     return data
  //   }

  //   getData();
  // }, [])


  return (
    <div className='quote panel'>
        <h2 className='quote-heading'>{`''`}</h2>
        <h2 className='quote-author'> - </h2>
    </div>
  )
}

export default Quote