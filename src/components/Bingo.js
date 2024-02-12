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
import SDGs1logo from "./images/SDGs1logo.svg";
import SDGs2logo from "./images/SDGs2logo.svg";
import SDGs3logo from "./images/SDGs3logo.svg";
import SDGs4logo from "./images/SDGs4logo.svg";
import SDGs5logo from "./images/SDGs5logo.svg";
import SDGs6logo from "./images/SDGs6logo.svg";
import SDGs7logo from "./images/SDGs7logo.svg";
import SDGs8logo from "./images/SDGs8logo.svg";
import SDGs9logo from "./images/SDGs9logo.svg";
import SDGs10logo from "./images/SDGs10logo.svg";
import SDGs11logo from "./images/SDGs11logo.svg";
import SDGs12logo from "./images/SDGs12logo.svg";
import SDGs13logo from "./images/SDGs13logo.svg";
import SDGs14logo from "./images/SDGs14logo.svg";
import SDGs15logo from "./images/SDGs15logo.svg";
import SDGs16logo from "./images/SDGs16logo.svg";
import SDGs17logo from "./images/SDGs17logo.svg";

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
  const [selectedTask, setSelectedTask] = useState(null); // 選択されたタスクを管理するための状態

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await CreateDB();
      setSelectedTasks(tasks);
    }
    fetchTasks();
  }, []);

  const handleMissionSelect = (index) => {
    if (selectedTasks && selectedTasks.length > index) {
      const task = selectedTasks[index];
      setSelectedTask(task); // 選択されたタスクの情報を設定
    } else {
      console.log("Task data is not available.");
    }
  };

  // 「戻る」ボタンのクリックハンドラ
  const handleBackClick = () => {
    setSelectedTask(null); // 選択されたタスクの状態をリセット
  };

  // 画像配列のマップ
  const bingoImages = [Bingo1, Bingo2, Bingo3, Bingo4, Bingo5, Bingo6, Bingo7, Bingo8, Bingo9];

//画像の参照をキーと結びつける
const imageMap = [
  
  SDGs1logo,SDGs2logo,SDGs3logo,SDGs4logo,SDGs5logo,SDGs6logo,SDGs7logo,SDGs8logo,SDGs9logo,SDGs10logo,SDGs11logo,SDGs12logo,SDGs13logo,SDGs14logo,SDGs15logo,SDGs16logo,SDGs17logo];

  return (
    <div className="bingo-main">
      {!selectedTask ? (
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
                  <img src={Image} alt={`Bingo ${index + 1}`} />
                </div>
              ))}
            </div>
        </div>
      ) : (
        <div>
          {/* 画像をマップから取得して表i示 */}
          {selectedTask && imageMap[selectedTask.id] && (
            <img src={imageMap[selectedTask.id]} alt={selectedTask.name} width={87} height={87}/>
          )}
          <p>{selectedTask.name}</p>
          <button onClick={handleBackClick}>戻る</button>
        </div>
      )}
    </div>
  );
};

export default Bingo;
