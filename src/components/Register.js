import React, { useState, useEffect } from "react";
import '../normalize.css'
import './Register.css'

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
import { Navigate } from "react-router-dom";

// パスワード表示切替アイコン
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";


const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  // 3秒後に非表示に切り替える関数
  const visibilityChange = (type) => {
    setPasswordType(type);
    setTimeout(() => {
      setPasswordType("password");
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      alert("正しく入力してください");
    }
  };

  /* ↓state変数「user」を定義 */
  const [user, setUser] = useState("");

  /* ↓ログインしているかどうかを判定する */
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      {/* ↓ログインできていればホームに遷移 */}
      {user ? (
        <Navigate to={`/`} />
      ) : (
        <>
          <h1>新規登録</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>メールアドレス</label>
              <input
                name="email"
                type="email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード</label>
              <input
                name="password"
                value={registerPassword}
                type={passwordType}
                onChange={(e) => setRegisterPassword(e.target.value)}
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
            <button>登録する</button>
          </form>
        </>
      )}
    </>
  );
};

export default Register;