// import logo from './logo.svg';
import './App.css';

// 色々import
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Bingo from "./components/Bingo";
import Mypage from "./components/Mypage";
import Learning from "./components/Learning";

// firebase.jsをインポート
// import { auth, provider } from "./firebase";
// import {signInWithPopup} from "firebase/auth";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/`} element={<Bingo />} />
          <Route path={`/mypage`} element={<Mypage />} />
          <Route path={`/learning/`} element={<Learning />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;