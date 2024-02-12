import React from 'react'
import '../normalize.css'
import './HomeFooter.css';
import StudySDGs from './images/StudySDGs-icon.svg';
import BacktoHome from './images/BacktoHome-icon.svg';
import HowtoPlay from './images/HowtoPlay-icon.svg';
import AccuntInfo from './images/Accuntinfo-icon.svg';


const HomeFooter = () => {
  return (
    <div className="footer-container">
      <footer className="home-footer">


        <div className="footer-item">
          <a href="/learning/">
            <img src={StudySDGs} alt="Study" width={30} height={30} />
            <p className='p-footer'>Study</p>
          </a>
        </div>
        <div className="footer-item">
          <a href="/home-bingo">
            <img src={BacktoHome} alt="Home" width={30} height={30} />
            <p className='p-footer'>Home</p>
          </a>
        </div>
        <div className="footer-item">
          <a href="/how-to-play/">
            <img src={HowtoPlay} alt="HowToPlay" width={30} height={30} />
            <p className='p-footer'>HowToPlay</p>
          </a>
        </div>
        <div className="footer-item">
          <a href="/my-page/">
            <img src={AccuntInfo} alt="Account" width={30} height={30} />
            <p className='p-footer'>Account</p>
          </a>
        </div>


      </footer>
    </div>
  )
}

export default HomeFooter