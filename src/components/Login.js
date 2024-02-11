import React, { useState, useEffect } from "react";
import '../normalize.css'
import './LoginRegister.css'

import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
import { Navigate, Link } from "react-router-dom";

// パスワード表示切替アイコン
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";


const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  // 3秒後に非表示に切り替える関数
  const visibilityChange = (type) => {
    setPasswordType(type);
    setTimeout(() => {
      setPasswordType("password");
    }, 1000);
  };

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
          <h1 className="account-title">Login</h1>
          <div className="input-main">
            <form className="account-form" onSubmit={handleSubmit}>
              <div>
                <label className="input-mail">Mail Address</label>
                <input
                  className="input-form"
                  name="email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="input-pass">Password</label>
                <input
                  className="input-form"
                  name="password"
                  value={loginPassword}
                  type={passwordType}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                {passwordType === "password" && (
                  <VisibilityOffIcon
                    onClick={() => visibilityChange("text")}
                    className="password-icon"
                  />
                )}
                {passwordType === "text" && (
                  <VisibilityIcon
                    onClick={() => visibilityChange("password")}
                    className="password-icon"
                  />
                )}
              </div>
              <button className="create-button">Login</button>
              <p><Link className="go-register" to={`/register/`}>Click here to register</Link></p>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Login;