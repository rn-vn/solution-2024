import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Bingo.css";
import { CreateDB, GetDB, WriteDB } from './CreateDB'; // 必要に応じてインポートパスを調整
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
import Clear from "./images/bingoclear.svg";

const Bingo = () => {
  const [bingo5, setStar] = useState(false);
  // 初期状態にBingo5を設定

  useEffect(() => {
    // starEarnedがtrueだった場合、localStorageに星を表示する
    if (localStorage.getItem('starEarned') === 'true') {
      setStar(Star);
    }
  }, []);
  
  const [selectedTasks, setSelectedTasks] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null); // 選択されたタスクを管理するための状態
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await GetDB();
      setSelectedTasks(tasks);
    }
    fetchTasks();
  }, []);

  const initializeTasks = async () => {
    const tasks = await CreateDB();
    setSelectedTasks(tasks);
  }

  const handleMissionSelect = async (index) => {
    if (selectedTasks) {
      if (index == 4) {
        let tasks = selectedTasks;
        tasks.status[index] = 1;
        setSelectedTasks(tasks);
        console.log(tasks.status);
        await WriteDB(tasks);
        navigate("/Learning");
      } else {
        const task = selectedTasks.task[index];
        setSelectedTask(task); // 選択されたタスクの情報を設定
        setSelectedIndex(index);
      }
    } else {
      console.log("Task data is not available.");
    }
  };

  // 「戻る」ボタンのクリックハンドラ
  const handleBackClick = () => {
    setSelectedTask(null); // 選択されたタスクの状態をリセット
  };

   // 「clear」ボタンのクリックハンドラ
   const handleClearClick = async () => {
    const index = selectedIndex;
    setSelectedTask(null); // 選択されたタスクの状態をリセット
    setSelectedIndex(null);
    let tasks = selectedTasks;
    tasks.status[index] = 1;
    await WriteDB(tasks);
    setSelectedTasks(tasks);
  };

  // 画像配列のマップ
  const bingoImages = [Bingo1, Bingo2, Bingo3, Bingo4, Bingo5, Bingo6, Bingo7, Bingo8, Bingo9];

  return (
    <div className="bingo-main">
        { selectedTask ? 
          <div className='Mission-display'>
            <img src={`${process.env.PUBLIC_URL}/images/${selectedTask.path}`} alt={selectedTask.path} width={87} height={87}/>
            <p>{selectedTask.name}</p>
            <button onClick={handleClearClick}>clear</button>
            <button onClick={handleBackClick}>戻る</button>
          </div>
          :
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
              {
                bingoImages.map((Image, index) => (
                  (selectedTasks && selectedTasks.status[index] === 1) ? 
                    ( index === 4 ?
                    <div key={index} className="bingo-cell" id={`bingo${index + 1}`} onClick={() => handleMissionSelect(index)}>
                      <img src={Star} alt={`Bingo ${index + 1}`} />
                    </div>
                    :
                    <div key={index} className="bingo-cell" id={`bingo${index + 1}`} onClick={() => handleMissionSelect(index)}>
                      <img src={Clear} alt={`Bingo ${index + 1}`} />
                    </div>
                    )
                  :
                  <div key={index} className="bingo-cell" id={`bingo${index + 1}`} onClick={() => handleMissionSelect(index)}>
                    <img src={Image} alt={`Bingo ${index + 1}`} />
                  </div>
                ))
              }
            </div>
            <button onClick={initializeTasks}>shuffle</button>
          </div>
        }
    </div>
  );
};

export default Bingo;