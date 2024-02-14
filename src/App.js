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
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/`} element={<Login />} />
          <Route path={`/home-bingo`} element={<HomeBingo />} />
          <Route path={`/my-page`} element={<Mypage />} />
          <Route path={`/learning/`} element={<Learning />} />
          <Route path={`/how-to-play/`} element={<Howtoplay />} />
          
          <Route path={`/goals/`} element={<Goals />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;