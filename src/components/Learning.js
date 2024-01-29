// ログイン判定 追加

import '../normalize.css'
import './Learning.css'
import HomeFooter from './HomeFooter'
import Goals from './images/learning-logo.png'
import urls from './SettingUrl'
import { auth } from "../FirebaseConfig.js";
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";

const Learning = () => {

  const [currentUrl, setCurrentUrl] = useState('');

  // 1日ごとにURLをランダムにローテーション
  useEffect(() => {

    // 日本時間の取得
    const currentDate = new Date();
    const japanTime = new Date(
      currentDate.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' })
    )

    // 翌日0時 & 初回実行時間の計算
    const nextDay = new Date(japanTime);
    nextDay.setDate(japanTime.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);
    const initialDelay = nextDay.getTime() - japanTime.getTime();

    // 初回実行
    const randomIndex = Math.floor(Math.random() * urls.length);
    setCurrentUrl(urls[randomIndex]);

    // 1日ごとのランダム実行
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * urls.length);
      setCurrentUrl(urls[randomIndex]);
    }, 1000 * 60 * 60 * 24);

    setTimeout(() => {
      clearInterval(intervalId);
      const newIntervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * urls.length);
        setCurrentUrl(urls[randomIndex]);
      }, 1000 * 60 * 60 * 24);
      return () => clearInterval(newIntervalId);
    }, initialDelay);
  }, []);

  // 新しい画面でリンクを開く
  const visitRandomLink = () => {
    window.open(currentUrl, '_blank');
  };

  // テキストボックスの文字数をカウント
  const textCount = () => {
    const text = document.getElementById('input').value;
    const count = document.getElementById('count');

    const spaceCharactor = text.match(/\S/g);
    if (spaceCharactor !== null) {
      count.innerHTML = `${spaceCharactor.length}`;
      count.style.fontSize = '24px';
      // 100文字以下のスタイル適用
      if (text.length >= 100) {
        count.style.color = '#735240';
        count.style.fontSize = '30px';
      } else {
        count.style.color = 'red';
      }
    } else {
      count.innerHTML = '0';
    }
  }

  /* TODO: ↓ログインを判定する設定 */
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      {/* ↓ログインできていればホームに遷移 */}
      {!user ? (
        <Navigate to={`/learning`} />
      ) : (
        <>
          <div className='learning-main'>
            <div className='learning-wrap'>
              <img src={Goals} alt='the global goals' />
              <h2 className='learn-sdgs'>Let's learn about the SDGs!</h2>
              <div className='task-url'>
                <input type="button" className='button' value="Click and Learn!" onClick={() => visitRandomLink()} />
              </div>

              {/* 回答欄 */}
              <textarea id="input" onChange={() => textCount()} />
              <div>
                <span id="count">0</span>
                <span className='count-number'><b>/100</b></span>
              </div>
              <input type='submit' className='submit' value='Click and Submit!' />
            <HomeFooter />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Learning;
