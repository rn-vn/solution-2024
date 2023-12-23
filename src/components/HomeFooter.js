import React from 'react'
import './HomeFooter.css';
import StudySDGs from './images/StudySDGs-icon.svg';
import BacktoHome from './images/BacktoHome-icon.svg';
import HowtoPlay from './images/HowtoPlay-icon.svg';
import AccuntInfo from './images/Accuntinfo-icon.svg';

const HomeFooter = () => {
  return (
    <div >
      <footer>
      <nav>
      <ul>
        <li>
          <a href="/learning">
            <img src={StudySDGs} alt="SDGsを学習する" width={30} height={30}/>
          SDGsを学習する
          </a>
          </li>
        <li>
          <a href="/">
            <img src={BacktoHome} alt="ホーム画面に戻る" width={30} height={30}/>
            ホーム画面に戻る
          </a>
        </li>                
        <li>
          <a href="/">
            <img src={HowtoPlay} alt="遊び方を見る" width={30} height={30}/>
            遊び方を見る
          </a>
        </li>       
        <li>
          <a href="/mypage">
          <img src={AccuntInfo} alt="アカウント情報" width={30} height={30}/>
            アカウント情報
          </a>
        </li>
        
        
      </ul>
      </nav>
      </footer>
    </div>
  )
}

export default HomeFooter