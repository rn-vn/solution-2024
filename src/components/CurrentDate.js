import React from 'react'
import './CurrentDate.css';

const CurrentDate = () => {

  const currentDate = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div>
      <div className='currentdate'>
        <p className="p-currentdate">{currentDate}</p>
      </div>
    </div>
  )
}

export default CurrentDate