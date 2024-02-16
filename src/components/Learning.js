/**
 * 文字数じゃなくて単語数カウントにする
 * 提出ボタンを押して条件を満たした場合のみ星にする
 */

import '../normalize.css'
import './Learning.css'
import React from 'react'
import HomeFooter from './HomeFooter.js'
import Goals from './images/learning-logo.png'
import Urls from './SettingUrl.js'
import { auth } from "../FirebaseConfig.js";
import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import Complete from "./images/complete.svg";

const Learning = () => {
  /**
   * 1日毎にURLをランダムにローテーションする関数
   * @param {string} currentUrl - 今日のURL
   * @param {string} setCurrentUrl - 今日のURLを更新する関数
   * @param {string} currentDate - 今日の日付
   * @param {string} initialDelay - 初回実行時間
   */
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
    const randomIndex = Math.floor(Math.random() * Urls.length);
    setCurrentUrl(Urls[randomIndex]);

    // 1日ごとのランダム実行
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * Urls.length);
      setCurrentUrl(Urls[randomIndex]);

    }, 1000 * 60 * 60 * 24);

    setTimeout(() => {
      clearInterval(intervalId);
      const newIntervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * Urls.length);
        setCurrentUrl(Urls[randomIndex]);
      }, 1000 * 60 * 60 * 24);
      return () => clearInterval(newIntervalId);
    }, initialDelay);
  }, []);

  // 新しい画面でリンクを開く
  const visitRandomLink = () => {
    window.open(currentUrl, '_blank');
  };

  const navigate = useNavigate();

  const [wordCount, setWordCount] = useState(0);

  // テキストボックスの文字数をカウント
  const textCountStyle = () => {
    const textArea = document.getElementById('input');
    const countDisplay = document.getElementById('count');
    const words = textArea.value.trim().split(/\s+/);
    const wordCount = words.filter(word => word.length > 0).length;
    countDisplay.innerHTML = wordCount;

    if (wordCount >= 30) {
      countDisplay.style.color = '#735240';
      countDisplay.style.fontSize = '30px';
    } else {
      countDisplay.style.color = 'red';
      countDisplay.style.fontSize = '24px';
    }
  };

  useEffect(() => {
    if (wordCount >= 30) {
      setWordCount(true);
    } else {
      setWordCount(false);
    }
  }, [wordCount]);


  const textCountCheck = () => {
    const count = parseInt(document.getElementById('count').innerHTML, 10);

    if (count >= 30) {
      alert('You have scored a star in the middle of your bingo!');
      localStorage.setItem('starEarned', 'true');
      console.log(localStorage.getItem('starEarned'));
      navigate('/home-bingo');
    } else {
      localStorage.setItem('starEarned', 'false');
      console.log(localStorage.getItem('starEarned'));
      alert('Please enter 30 words or more!');
    }
  };

  /**
   * ログイン判定
   * @param {string} user - ユーザー情報
   * @param {string} setUser - ユーザー情報を更新
   */
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  /**
   * 提出後の挙動
   * @param {string} navigate - ページ遷移
   */

  const AddStar = () => {
    const submitCheck = document.getElementById('submit');
    submitCheck.addEventListener('click', textCountCheck);
  };

  return (
    <>
      {/* ↓ログインできていれば遷移 */}
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/`} />
          ) : (
            <>
              <div className='learning-main'>
                <div className='learning-wrap'>
                  <img src={Goals} width={80} alt='the global goals' />
                  <h2 className='learn-sdgs'>Let's learn about the SDGs !</h2>
                  <div className='task-url'>
                    <input type="button" className='button' value="Click and Learn" onClick={() => visitRandomLink()} />
                  </div>

                  {/* 回答欄 */}
                  <textarea id="input" onChange={() => textCountStyle()} />
                  <div>
                    <span id="count">0</span>
                    <span className='count-number'><b>/30</b></span>
                  </div>
                  <input type='submit' id='submit' className='submit' onClick={AddStar} value='Click and Submit' />
                </div>
                  {wordCount && <img src={Complete} alt="Complete" className="complete" />}
                <HomeFooter />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Learning;
