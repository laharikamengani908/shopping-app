
import React from 'react'

const Headers = () => {
  return (
    <div className='headersection' >

      <div className='left'>
        <div className='title'>
          <h2>Shopping Mall</h2>
        </div>
      </div>

      <div className='center'>
        <ul>
          <li>Women</li>
          <li>Men</li>
          <li>Children</li>
          <li>Beauty</li>

        </ul>

      </div>
     <div className="searchbox">
      <input type="text" placeholder='search....'/>
     </div>

      <div className='right'>
        <div className="signin">
          Signin / SignUp
        </div>
        <div className='cart'>
          cart 
        </div>

      </div>
    </div>
  )
}

export default Headers