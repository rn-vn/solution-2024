import React from 'react'
import './Bingo.css';
import bingo1 from './images/bingo1.svg';
import bingo2 from './images/bingo2.svg';
import bingo3 from './images/bingo3.svg';
import bingo4 from './images/bingo4.svg';
import Star from './images/Star 1.svg';
import bingo6 from './images/bingo6.svg';
import bingo7 from './images/bingo7.svg';
import bingo8 from './images/bingo8.svg';
import bingo9 from './images/bingo9.svg';

const Bingo = () => {
  return (
    <div className='main'>
     
      <div className='bingo-container'>
        <div className='bingo-firststage'>
      <img src={bingo1} alt="bingo1" width={87} height={87}/>
      <img src={bingo2} alt="bingo2" width={87} height={87}/>
      <img src={bingo3} alt="bingo3" width={87} height={87}/>
      </div>
      <div className='bingo-secondstage'>
      <img src={bingo4} alt="bingo4" width={87} height={87}/>
      <img src={Star} alt="Star" width={87} height={87}/>
      <img src={bingo6} alt="bingo6" width={87} height={87}/>
      </div>
      <div className='bingo-thirdstage'>
      <img src={bingo7} alt="bingo7" width={87} height={87}/>
      <img src={bingo8} alt="bingo8" width={87} height={87}/>
      <img src={bingo9} alt="bingo9" width={87} height={87}/>
      </div>
      </div>
      
    </div>
  )
}

export default Bingo