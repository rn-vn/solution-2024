import React from 'react'
import './BingoBox.css';
import '../normalize.css'
import './Learning.css'
import HomeFooter from './HomeFooter'

const Bingo1 = () => {
  return (
    <>
        <div className = 'main'>
            <div className = 'main-container'>
                <div className = 'image'>
                </div>
                <div className = "task">
                    <p>マイボトルを持参</p>
                </div>
                <div className='button'>
                    <p>Clear</p>
                </div>
            </div>
        </div>
        <HomeFooter />
    </>    
  )
}

export default Bingo1