import React from 'react'
import './Bingo.css';
import BingoTitle from './images/bingotitle.svg';
import Bingo1 from './images/bingo1.svg';
import Bingo2 from './images/bingo2.svg';
import Bingo3 from './images/bingo3.svg';
import Bingo4 from './images/bingo4.svg';
import Bingo5 from './images/bingo5.svg';
import Star from './images/Star1.svg';
import Bingo6 from './images/bingo6.svg';
import Bingo7 from './images/bingo7.svg';
import Bingo8 from './images/bingo8.svg';
import Bingo9 from './images/bingo9.svg';

const Bingo = () => {
  return (
    <div className='bingo-main'>

      <div className='bingo-container'>
        <div className='bingotitle-container'>
          <img className='bingotitle' src={BingoTitle} alt="bingotitle" width={160} height={69} />
        </div>
        <div className='bingo-firststage'>
          <img className='bingo1' src={Bingo1} alt="bingo1" width={87} height={87} />
          <img className='bingo2' src={Bingo2} alt="bingo2" width={87} height={87} />
          <img className='bingo3' src={Bingo3} alt="bingo3" width={87} height={87} />
        </div>
        <div className='bingo-secondstage'>
          <img className='bingo4' src={Bingo4} alt="bingo4" width={87} height={87} />
          <img className='bingo5' id='bingo5' src={Bingo5} alt="bingo5" width={87} height={87} />
          <img className='bingo6' src={Bingo6} alt="bingo6" width={87} height={87} />
        </div>
        <div className='bingo-thirdstage'>
          <img className='bingo7' src={Bingo7} alt="bingo7" width={87} height={87} />
          <img className='bingo8' src={Bingo8} alt="bingo8" width={87} height={87} />
          <img className='bingo9' src={Bingo9} alt="bingo9" width={87} height={87} />
        </div>
      </div>

    </div>
  )
}

export default Bingo