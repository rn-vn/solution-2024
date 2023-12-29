import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
import { Navigate, Link } from "react-router-dom";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  /* ↓関数「handleSubmit」を定義 */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      alert("メールアドレスまたはパスワードが間違っています");
    }
  };

  /* ↓ログインを判定する設定 */
  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  return (
    <>
      {/* ↓ログインできていればホームに遷移 */}
      {user ? (
        <Navigate to={`/home-bingo/`} />
      ) : (
        <>
          <h1>ログインページ</h1>
          {/* onSubmitを追加↓ */}
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              {/* ↓「value」と「onChange」を追加 */}
              <input
                name="email"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              {/* ↓「value」と「onChange」を追加 */}
              <input
                name="password"
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </div>
            <button>ログイン</button>
            <p>新規登録は<Link to={`/register/`}>こちら</Link></p>
          </form>
        </>
      )}
    </>
  );
};

export default Login;