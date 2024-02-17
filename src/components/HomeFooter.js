import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../normalize.css'
import './HomeFooter.css';
import StudySDGs from './images/StudySDGs-icon.svg';
import BacktoHome from './images/BacktoHome-icon.svg';
import HowtoPlay from './images/HowtoPlay-icon.svg';
import AccuntInfo from './images/Accuntinfo-icon.svg';


const HomeFooter = () => {
  const navigate = useNavigate();

  return (
    <div className="footer-container">
      <footer className="home-footer">

        <div className="footer-item" onClick={() => navigate(`${process.env.PUBLIC_URL}/learning/`)}>
          <img src={StudySDGs} alt="Study" width={30} height={30} />
          <p className='p-footer'>Study</p>
        </div>
        <div className="footer-item" onClick={() => navigate(`${process.env.PUBLIC_URL}/home-bingo/`)}>
          <img src={BacktoHome} alt="Home" width={30} height={30} />
          <p className='p-footer'>Home</p>
        </div>
        <div className="footer-item" onClick={() => navigate(`${process.env.PUBLIC_URL}/how-to-play/`)}>
          <img src={HowtoPlay} alt="HowToPlay" width={30} height={30} />
          <p className='p-footer'>HowToPlay</p>
        </div>
        <div className="footer-item" onClick={() => navigate(`${process.env.PUBLIC_URL}/my-page/`)}>
          <img src={AccuntInfo} alt="Account" width={30} height={30} />
          <p className='p-footer'>Account</p>
        </div>

      </footer>
    </div>
  );
};

export default HomeFooter