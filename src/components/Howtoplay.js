import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
import { Navigate } from "react-router-dom";

const Howtoplay = () => {
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
  
  return (
    <>
      {! loading && (
        <>
          {!user ? (
              <Navigate to={`/`} />
            ) : (
            
            <div>Howtoplay</div>
          )}
        </>
      )}
    </>
  )
}

export default Howtoplay