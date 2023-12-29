// import logo from './logo.svg';
import './App.css';

// 色々import
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import HomeBingo from "./components/HomeBingo";
import Mypage from "./components/Mypage";
import Learning from "./components/Learning";
import Howtoplay from './components/Howtoplay';

// firebase.jsをインポート
//import { auth, provider } from "./firebase";
 //import {signInWithPopup} from "firebase/auth";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/login/`} element={<Login />} />
          <Route path={`/`} element={<HomeBingo />} />
          <Route path={`/mypage`} element={<Mypage />} />
          <Route path={`/learning/`} element={<Learning />} />
          <Route path={`/howtoplay/`} element={<Howtoplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;