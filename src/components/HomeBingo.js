import React from 'react'
import '../normalize.css'
import CurrentDate from './CurrentDate'
import HomeFooter from './HomeFooter'
import Bingo from './Bingo'
import './HomeBingo.css';

const HomeBingo = () => {
  return (

    <div className='home-main'>
      <CurrentDate />
      <div className="home-wrap">
        <Bingo />
      </div>
      <HomeFooter />

    </div>
  )
}

export default HomeBingo