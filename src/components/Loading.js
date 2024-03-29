import React from 'react'
import './Loading.css'

const Loading = () => (
  <div>
    <div className='spinner'>
      <div className='double-bounce2'></div>
      <div className='double-bounce1'></div>
    </div>
    <h1>Once these circles disappear, begin scrolling!</h1>
  </div>
)

export default Loading
