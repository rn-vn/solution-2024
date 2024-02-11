import React from 'react'
import './CurrentDate.css';

const CurrentDate = () => {

  const currentDate = new Date().toLocaleDateString(); 

  return (
    <div>
      <div className='currentdate'>
      <p className="p-currentdate">{currentDate}</p>
      </div>
    </div>
  )
}

export default CurrentDate