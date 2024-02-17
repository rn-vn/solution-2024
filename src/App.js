import './App.css';
import React from 'react';

// 色々import
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import HomeBingo from "./components/HomeBingo";
import Mypage from "./components/Mypage";
import Learning from "./components/Learning";
import Howtoplay from './components/Howtoplay';
import Goals from './components/Goals';

// firebase.jsをインポート
//import { auth, provider } from "./firebase";
//import {signInWithPopup} from "firebase/auth";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/register/`} element={<Register />} />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Login />} />
          <Route path={`${process.env.PUBLIC_URL}/home-bingo`} element={<HomeBingo />} />
          <Route path={`${process.env.PUBLIC_URL}/my-page`} element={<Mypage />} />
          <Route path={`${process.env.PUBLIC_URL}/learning/`} element={<Learning />} />
          <Route path={`${process.env.PUBLIC_URL}/how-to-play/`} element={<Howtoplay />} />

          <Route path={`/goals/`} element={<Goals />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;