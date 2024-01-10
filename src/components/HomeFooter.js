import React from 'react'
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
            <img src={StudySDGs} alt="SDGsを学習する" width={30} height={30}/>
            <p className='p-footer'>SDGsを<br/>学習する</p>
          </a>
          </div>
        <div className="footer-item">
          <a href="/">
            <img src={BacktoHome} alt="ホーム画面に戻る" width={30} height={30}/>
            <p className='p-footer'>ホーム画面に<br/>戻る</p>
          </a>
        </div>                
        <div className="footer-item">
          <a href="/how-to-play/">
            <img src={HowtoPlay} alt="遊び方を見る" width={30} height={30}/>
            <p className='p-footer'>遊び方を<br/>見る</p>
          </a>
        </div>       
        <div className="footer-item">
          <a href="/my-page/">
          <img src={AccuntInfo} alt="アカウント情報" width={30} height={30}/>
          <p className='p-footer'>アカウント情報</p>
          </a>
        </div>
        
        
      </footer>
    </div>
  )
}

export default HomeFooter