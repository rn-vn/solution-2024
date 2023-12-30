import React from 'react'
import '../normalize.css'
import CurrentDate from './CurrentDate'
import HomeFooter from './HomeFooter'
import Bingo from './Bingo'

const HomeBingo = () => {
  return (
   
    <div>
     <CurrentDate />
      <Bingo />
      <HomeFooter />

    </div>
  )
}

export default HomeBingo