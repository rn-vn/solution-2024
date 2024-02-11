import { auth, db } from '../FirebaseConfig';
import { collection, doc, setDoc } from '@firebase/firestore';
import { Task } from '@mui/icons-material';

const TaskList = [
  {id: 1, name: "タスク1", path: "画像のパス"}, 
  {id: 2, name: "タスク2", path: "画像のパス"}, 
  {id: 3, name: "タスク3", path: "画像のパス"}, 
  {id: 4, name: "タスク4", path: "画像のパス"}, 
  {id: 5, name: "タスク5", path: "画像のパス"}, 
  {id: 6, name: "タスク6", path: "画像のパス"}, 
  {id: 7, name: "タスク7", path: "画像のパス"}, 
  {id: 8, name: "タスク8", path: "画像のパス"}, 
  {id: 9, name: "タスク9", path: "画像のパス"},
  {id: 10, name: "タスク10", path: "画像のパス"},
  {id: 11, name: "タスク11", path: "画像のパス"},
  {id: 12, name: "タスク12", path: "画像のパス"},
  {id: 13, name: "タスク13", path: "画像のパス"},
  {id: 14, name: "タスク14", path: "画像のパス"},
  {id: 15, name: "タスク15", path: "画像のパス"},
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