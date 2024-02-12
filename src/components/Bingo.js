import React, { useState, useEffect } from 'react';
import "./Bingo.css";
import { CreateDB } from './CreateDB'; // 必要に応じてインポートパスを調整
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
  const [bingo5, setStar] = useState(false);
  // 初期状態にBingo5を設定

  useEffect(() => {
    // starEarnedがtrueだった場合、localStorageに星を表示する
    if (localStorage.getItem('starEarned') === 'true') {
      setStar(Star);
    }
  }, []);
  
  const [selectedTasks, setSelectedTasks] = useState([]);

  useState(() => {
    async function fetchTasks() {
      const tasks = await CreateDB();
      setSelectedTasks(tasks);
    }
    fetchTasks();
  }, []);

  const handleMissionSelect = (index) => {
    if (selectedTasks && selectedTasks.length > index) {
      const selectedTask = selectedTasks[index];
      console.log(`Selected Task ID: ${selectedTask.id}, Name: ${selectedTask.name}, Path: ${selectedTask.path}`);
    } else {
      console.log("Task data is not available.");
    }
  };

  // 画像配列のマップ
  const bingoImages = [Bingo1, Bingo2, Bingo3, Bingo4, bingo5 ? Star:Bingo5, Bingo6, Bingo7, Bingo8, Bingo9];
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
          {bingoImages.map((Image, index) => (
            <div key={index} className="bingo-cell" id={`bingo${index + 1}`} onClick={() => handleMissionSelect(index)}>
              <img className="bingo-cell" src={Image} alt={`Bingo ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bingo;
