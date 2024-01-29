import React from 'react'
import '../normalize.css'
import CurrentDate from './CurrentDate'
import HomeFooter from './HomeFooter'
import Bingo from './Bingo'
import './HomeBingo.css';

const HomeBingo = () => {
  return (
   
    <div>
      <div className="home-bingo-container">
     <CurrentDate />
      <Bingo />
      <HomeFooter />
      </div>

    </div>
  )
}

export default HomeBingo