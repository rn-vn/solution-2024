import React from 'react'
import './Bingo.css';
import bingotitle from './images/bingotitle.svg';
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
        <div className='bingotitle-container'>
          <img  className='bingotitle' src={bingotitle} alt="bingotitle" width={160} height={69}/>
        </div>
        <div className='bingo-firststage'>
          <a href="/bingo/1">
            <img className='bingo1' src={bingo1} alt="bingo1" width={87} height={87}/>
          </a>
          <a href="/bingo/2">
            <img className='bingo2' src={bingo2} alt="bingo2" width={87} height={87}/>
          </a>  
          <a href="/bingo/3">  
            <img className='bingo3' src={bingo3} alt="bingo3" width={87} height={87}/>
          </a>  
        </div>
        <div className='bingo-secondstage'>
          <a href="/bingo/4">
            <img className='bingo4' src={bingo4} alt="bingo4" width={87} height={87}/>
          </a>  
            <img className='bingostar' src={Star} alt="Star" width={87} height={87}/>
          <a href="/bingo/6">  
            <img className='bingo6' src={bingo6} alt="bingo6" width={87} height={87}/>
          </a>  
        </div>
        <div className='bingo-thirdstage'>
          <a href="/bingo/7">        
            <img className='bingo7' src={bingo7} alt="bingo7" width={87} height={87}/>
          </a>  
          <a href="/bingo/8">  
            <img className='bingo8' src={bingo8} alt="bingo8" width={87} height={87}/>
          </a>  
          <a href="/bingo/9">  
            <img className='bingo9' src={bingo9} alt="bingo9" width={87} height={87}/>
          </a>  
        </div>
      </div>
    </div>
  )
}

export default Bingo