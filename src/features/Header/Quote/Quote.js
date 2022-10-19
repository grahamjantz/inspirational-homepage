import React from 'react'
import './Quote.css'

const quote = {
  quote: 'We cannot solve problems with the kind of thinking we employed when we came up with them.',
  author: 'Albert Einstein'
}

const Quote = () => {
  return (
    <div className='quote panel'>
        <h2 className='quote-heading'>{`'${quote.quote}'`}</h2>
        <h2 className='quote-author'> - {quote.author}</h2>
    </div>
  )
}

export default Quote