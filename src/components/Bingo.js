import React from "react";
import "./Bingo.css";
import BingoTitle from "./images/bingotitle.svg";
import Bingo1 from "./images/bingo1.svg";
import Bingo2 from "./images/bingo2.svg";
import Bingo3 from "./images/bingo3.svg";
import Bingo4 from "./images/bingo4.svg";
import Bingo5 from "./images/bingo5.svg";
import Star from "./images/Star1.svg";
import Bingo6 from "./images/bingo6.svg";
import Bingo7 from "./images/bingo7.svg";
import Bingo8 from "./images/bingo8.svg";
import Bingo9 from "./images/bingo9.svg";

const Bingo = () => {
  return (
    <div className="bingo-main">
      <div className="bingo-container">
        <div className="bingotitle-container">
          <img
            className="bingotitle"
            src={BingoTitle}
            alt="bingotitle"
            width={160}
            height={69}
          />
        </div>
        <div className="bingo-grid">
          <div className="bingo-cell" id="bingo1">
            <img className="bingo-cell" src={Bingo1} alt="Bingo 1" />
          </div>
          <div className="bingo-cell" id="bingo2">
            <img className="bingo-cell" src={Bingo2} alt="Bingo 2" />
          </div>
          <div className="bingo-cell" id="bingo3">
            <img className="bingo-cell" src={Bingo3} alt="Bingo 3" />
          </div>
          <div className="bingo-cell" id="bingo4">
            <img className="bingo-cell" src={Bingo4} alt="Bingo 4" />
          </div>
          <div className="bingo-cell" id="bingo5">
            <img className="bingo-cell" src={Bingo5} alt="Bingo 5" />
          </div>
          <div className="bingo-cell" id="bingo6">
            <img className="bingo-cell" src={Bingo6} alt="Bingo 6" />
          </div>
          <div className="bingo-cell" id="bingo7">
            <img className="bingo-cell" src={Bingo7} alt="Bingo 7" />
          </div>
          <div className="bingo-cell" id="bingo8">
            <img className="bingo-cell" src={Bingo8} alt="Bingo 8" />
          </div>
          <div className="bingo-cell" id="bingo9">
            <img className="bingo-cell" src={Bingo9} alt="Bingo 9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bingo;
