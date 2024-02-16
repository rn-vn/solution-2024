import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Bingo.css";
import { CreateDB, GetDB, WriteDB } from './CreateDB'; // 必要に応じてインポートパスを調整
import checkBingo from './CheckBingo';
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
import Complete from "./images/complete.svg";

const Bingo = () => {

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
      if (index === 4) {
        navigate("/Learning");
        if (localStorage.getItem('starEarned') === 'true') {
          selectedTasks.status[4] = 1;
          setSelectedTasks(selectedTasks);
          await WriteDB(selectedTasks);
        } else if (localStorage.getItem('starEarned') === 'false') {
          selectedTasks.status[4] = 0;
          setSelectedTasks(selectedTasks);
          await WriteDB(selectedTasks);
        }
      } else {
        const task = selectedTasks.task[index];
        setSelectedTask(task);
        setSelectedIndex(index);
      }
    } else {
      console.log("Task data is not available.");
    }
  };

  // returnボタンのクリックハンドラ
  const handleBackClick = () => {
    setSelectedTask(null);
  };

  // clearボタンのクリックハンドラ
  const handleClearClick = async () => {
    const index = selectedIndex;
    setSelectedTask(null);
    setSelectedIndex(null);
    let tasks = selectedTasks;
    tasks.status[index] = 1;
    await WriteDB(tasks);
    setSelectedTasks(tasks);
  };

  // const [bingo5, setStar] = useState(Bingo5);
  // useEffect(() => {
  //   if (localStorage.getItem('starEarned') === 'true') {
  //     selectedTasks.status[4] = 1;
  //     setStar(Bingo5); 
  //   } else {
  //     selectedTasks.status[4] = 0;
  //     setStar(Bingo5);
  //   }
  // }, [selectedTasks]);

  const bingoImages = selectedTasks ? selectedTasks.status.map((status, index) => {
    return [Bingo1, Bingo2, Bingo3, Bingo4, Bingo5, Bingo6, Bingo7, Bingo8, Bingo9][index];
  }) : [];

  // ビンゴ判定
  const [bingo, setBingo] = useState(false);
  useEffect(() => {
    if (checkBingo(selectedTasks)) {
      setBingo(true);
    } else {
      setBingo(false);
    }
  }, [selectedTasks]);

  return (
    <div className="bingo-main">
      {selectedTask ?
        <div className='mission-display'>
          <img className='eachtask-img' src={`${process.env.PUBLIC_URL}/images/${selectedTask.path}`} alt={selectedTask.path} width={120} height={120} />
          <p className='eachtask-title'>{selectedTask.name}</p>
          <button className='mission-clear-button' onClick={handleClearClick}>Clear!</button>
          <button className='mission-return-button' onClick={handleBackClick}>return</button>
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
                  <div key={index} className="bingo-cell" id={`bingo${index + 1}`} onClick={() => handleMissionSelect(index)}>
                    <img src={index === 4 ? Star : Clear} alt={`Bingo ${index + 1}`} />
                  </div>
                  :
                  <div key={index} className="bingo-cell" id={`bingo${index + 1}`} onClick={() => handleMissionSelect(index)}>
                    <img src={Image} alt={`Bingo ${index + 1}`} />
                  </div>
              ))
            }
            {bingo && <img src={Complete} alt="Complete" className="complete" />}
          </div>
          <button className='shuffle-button' onClick={initializeTasks}>shuffle</button>

        </div>
      }
    </div>
  );
};

export default Bingo;