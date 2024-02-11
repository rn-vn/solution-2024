import { auth, db } from '../FirebaseConfig';
import { collection, doc, setDoc } from '@firebase/firestore';
import { Task } from '@mui/icons-material';

const TaskList = [
  {id: 1, name: "Bring your own bottle", path: "./images/SDGs12logo.svg"}, 
  {id: 2, name: "Bring your own eco-bag", path: "./images/SDGs12logo.svg"}, 
  {id: 3, name: "Bring your own chopsticks", path: "./images/SDGs12logo.svg"}, 
  {id: 4, name: "Bring your own lunch", path: "./images/SDGs12logo.svg"}, 
  {id: 5, name: "Utilize leftovers", path: "./images/SDGs11logo.svg"}, 
  {id: 6, name: "Bring your own umbrella", path: "./images/SDGs1logo.svg"}, 
  {id: 7, name: "Make donations", path: "./images/SDGs11logo.svg"}, 
  {id: 8, name: "walking, biking, or public transportation instead of driving a car", path: "./images/SDGs12logo.svg"}, 
  {id: 9, name: "Purchase items with less plastic", path: "./images/SDGs12logo.svg"},
  {id: 10, name: "Buy refillable products", path: "./images/SDGs12logo.svg"},
  {id: 11, name: "Purchase products with FSC certification", path: "./images/SDGs15logo.svg"},
  {id: 12, name: "Purchase products with MSC certification", path: "./images/SDGs14logo.svg"},
  {id: 13, name: "Purchase products with ASC certification", path: "./images/SDGs14logo.svg"},
  {id: 14, name: "Buy organic vegetables", path: "./images/SDGs12logo.svg"},
  {id: 15, name: "Buy fair trade products", path: "./images/SDGs12logo.svg"},
  {id: 15, name: "Look at a disaster map", path: "./images/SDGs12logo.svg"},
  {id: 15, name: "Purchase products from companies that are engaging with the SDGs", path: "./images/SDGs12logo.svg"},
  {id: 15, name: "Look for (and buy) food produced in your local area", path: "./images/SDGs12logo.svg"},
]

const CreateDB = async () => {
      // ユーザーID取得
      const userId = auth.currentUser.uid;
      console.log(userId);

      // タスクリストから9つのランダムなタスクを抽出する関数
      function getRandomTasks(taskList, count) {
        const shuffledTasks = taskList.sort(() => Math.random() - 0.5);
        return shuffledTasks.slice(0, count);
      }

      // 9つのランダムなタスクを取得
      const selectedTasks = getRandomTasks(TaskList, 9);
            // 各タスクを個別の変数に格納
            const task1 = selectedTasks[0];
            const task2 = selectedTasks[1];
            const task3 = selectedTasks[2];
            const task4 = selectedTasks[3];
            const task5 = selectedTasks[4];
            const task6 = selectedTasks[5];
            const task7 = selectedTasks[6];
            const task8 = selectedTasks[7];
            const task9 = selectedTasks[8];

            // 各タスクの確認ログ
            console.log(task1);
            console.log(task2);
            console.log(task3);
            console.log(task4);
            console.log(task5);
            console.log(task6);
            console.log(task7);
            console.log(task8);
            console.log(task9);

      // ビンゴ情報のドキュメント作成
      const bingoDocRef = doc(collection(db, 'BingoInfo'), userId );
      await setDoc(bingoDocRef, {
        masu1:{
          Task: task1,
          Status: 0
        },
        masu2:{
          Task: task2,
          Status: 0
        },
        masu3:{
          Task: task3,
          Status: 0
        },
        masu4:{
          Task: task4,
          Status: 0
        },
        masu5:{
          Task: task5,
          Status: 0
        },
        masu6:{
          Task: task6,
          Status: 0
        },
        masu7:{
          Task: task7,
          Status: 0
        },
        masu8:{
          Task: task8,
          Status: 0
        },
        masu9:{
          Task: task9,
          Status: 0
        },
      })
      console.log(bingoDocRef);
};


export {TaskList, CreateDB};