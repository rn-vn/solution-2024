import React from 'react'

const CurrentDate = () => {

  const currentDate = new Date().toLocaleDateString(); 

  return (
    <div>
      <p>{currentDate}</p>
    </div>
  )
}

export default CurrentDate