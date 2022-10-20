import React, { useState, useEffect } from 'react'
import './Quote.css'

const placeholderQuote = {
  quote: 'We cannot solve problems with the kind of thinking we employed when we came up with them.',
  author: 'Albert Einstein'
}

const Quote = () => {

  const [quote, setQuote] = useState(placeholderQuote.quote)
  const [author, setAuthor] =useState(placeholderQuote.author)

  useEffect(() => {    

    const url = 'https://quotes.rest/qod/?category=inspire&language=en'
    
    const getData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      setQuote(data.contents.quotes[0].quote)
      setAuthor(data.contents.quotes[0].author)
      return data
    }

    getData();
  }, [])


  return (
    <div className='quote panel'>
        <h2 className='quote-heading'>{`'${quote}'`}</h2>
        <h2 className='quote-author'> - {author}</h2>
    </div>
  )
}

export default Quote