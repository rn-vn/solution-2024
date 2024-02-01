import React, { useState, useEffect } from "react";
/* 「onAuthStateChanged」と「auth」をimport↓ */
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
/* ↓「Navigate」をimport */
import {
  useNavigate,
  Navigate
} from "react-router-dom";

import '../normalize.css'
import './Mypage.css';
import HomeFooter from './HomeFooter';
import AccuntInfo from './images/Accuntinfo-icon.svg';
import DeteteIcon from './images/delete-icon.svg';


const Mypage = () => {
  /* ↓state変数「user」を定義 */
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  /* ↓「navigate」を定義 */
  const navigate = useNavigate();

  /* ↓関数「logout」を定義 */
  const logout = async () => {
    await signOut(auth);
    navigate("/");
  }

  return (
    <>
      {/* ↓「loading」がfalseのときにマイページを表示する設定 */}
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/`} />
          ) : (
            <>
            <div className="mypage-container">
              <div className="accountinformation-container">
              <img src={DeteteIcon} alt="アカウント情報" width={30} height={30}/>
              <div className="footer-item">
              <img src={AccuntInfo} alt="アカウント情報" width={30} height={30}/>
              <p className='p-footer'>アカウント情報</p>
              </div>

              <p className="Mypage-email">{user?.email}</p>

              <button  className="mypage-bottom" onClick={logout}>ログアウト</button>
              </div>
              </div>
              <HomeFooter />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Mypage;