import { auth, db } from '../FirebaseConfig';
import { collection, doc, setDoc } from '@firebase/firestore';

const TaskList = [
  {id: 1, name: "Bring your own bottle", path: "./images/SDGs14logo.svg"}, 
  {id: 2, name: "Bring your own eco-bag", path: "./images/SDGs14logo.svg"}, 
  {id: 3, name: "Bring your own cutlery", path: "./images/SDGs14logo.svg"}, 
  {id: 4, name: "Donate to organizations that address poverty issues", path: "./images/SDGs1logo.svg"}, 
  {id: 5, name: "Eat your meal without leaving any leftovers", path: "./images/SDGs12logo.svg"}, 
  {id: 6, name: "Use food sharing services", path: "./images/SDGs2logo.svg"}, 
  {id: 7, name: "Donate to a food bank", path: "./images/SDGs2logo.svg"}, 
  {id: 8, name: "walking, biking, or public transportation instead of driving a car", path: "./images/SDGs13logo.svg"}, 
  {id: 9, name: "Buy plastic-free products", path: "./images/SDGs14logo.svg"},
  {id: 10, name: "Buy refillable products", path: "./images/SDGs12logo.svg"},
  {id: 11, name: "Buy products with FSC certification", path: "./images/SDGs15logo.svg"},
  {id: 12, name: "Buy products with MSC certification", path: "./images/SDGs14logo.svg"},
  {id: 13, name: "Buy products with ASC certification", path: "./images/SDGs14logo.svg"},
  {id: 14, name: "Buy organic vegetables", path: "./images/SDGs3logo.svg"},
  {id: 15, name: "Join an event on the SDGs", path: "./images/SDGs17logo.svg"},
  {id: 16, name: "Buy fair trade products", path: "./images/SDGs12logo.svg"},
  {id: 17, name: "Look at the hazard map", path: "./images/SDGs11logo.svg"},
  {id: 18, name: "Buy products from companies that are committed to the SDGs", path: "./images/SDGs12logo.svg"},
  {id: 19, name: "Buy food produced in your local area", path: "./images/SDGs11logo.svg"},
  {id: 20, name: "Donate to organizations that provide vaccine support", path: "./images/SDGs3logo.svg"},
  {id: 21, name: "Exercise moderately", path: "./images/SDGs3logo.svg"},
  {id: 22, name: "Follow the traffic rules", path: "./images/SDGs3logo.svg"},
  {id: 23, name: "Join educational volunteer activities", path: "./images/SDGs4logo.svg"},
  {id: 24, name: "Consider whether you have gender discrimination", path: "./images/SDGs5logo.svg"},
  {id: 25, name: "Save water", path: "./images/SDGs6logo.svg"},
  {id: 26, name: "Save electricity", path: "./images/SDGs7logo.svg"},
  {id: 27, name: "Think about working as yourself in the future", path: "./images/SDGs8logo.svg"},
  {id: 28, name: "Donate for areas with poor infrastructure facilities", path: "./images/SDGs9logo.svg"},
  {id: 29, name: "Donate to humanitarian organizations", path: "./images/SDGs10logo.svg"},
  {id: 30, name: "Pick up trash", path: "./images/SDGs11logo.svg"},
  {id: 31, name: "Learn about war and conflict", path: "./images/SDGs16logo.svg"}
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