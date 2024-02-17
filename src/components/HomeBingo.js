import React from 'react'
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom'
import { auth } from "../FirebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";
import '../normalize.css'
import CurrentDate from './CurrentDate'
import HomeFooter from './HomeFooter'
import Bingo from './Bingo'
import './HomeBingo.css';

const HomeBingo = () => {
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

  return (
    <>
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`${process.env.PUBLIC_URL}/`} />
          ) : (
            <>
              <div className='home-main'>
                <CurrentDate />
                <div className="home-wrap">
                  <Bingo />
                </div>
                <HomeFooter />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default HomeBingo