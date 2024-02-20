// import React, { useState } from 'react';
import { auth, db } from '../FirebaseConfig';
import { collection, doc, setDoc, getDoc } from '@firebase/firestore';

const TaskList = [
  { id: 1, name: "Bring your own bottle", path: "SDGs14logo.svg" },
  { id: 2, name: "Bring your own eco-bag", path: "SDGs14logo.svg" },
  { id: 3, name: "Bring your own cutlery", path: "SDGs14logo.svg" },
  { id: 4, name: "Donate to organizations that address poverty issues", path: "SDGs1logo.svg" },
  { id: 5, name: "Finish your whole meal", path: "SDGs12logo.svg" },
  { id: 6, name: "Use food sharing services", path: "SDGs2logo.svg" },
  { id: 7, name: "Donate to a food bank", path: "SDGs2logo.svg" },
  { id: 8, name: "Walk, bike or use public transportation instead of driving a car", path: "SDGs13logo.svg" },
  { id: 9, name: "Buy plastic-free products", path: "SDGs14logo.svg" },
  { id: 10, name: "Buy refillable products", path: "SDGs12logo.svg" },
  { id: 11, name: "Buy products with Forest Stewardship Council (FSC) certification", path: "SDGs15logo.svg" },
  { id: 12, name: "Buy products with Marine Stewardship Council (MSC) certification", path: "SDGs14logo.svg" },
  { id: 13, name: "Buy products with Aquatic Stewardship Council (ASC) certification", path: "SDGs14logo.svg" },
  { id: 14, name: "Buy organic vegetables", path: "SDGs3logo.svg" },
  { id: 15, name: "Join an event about the SDGs", path: "SDGs17logo.svg" },
  { id: 16, name: "Buy fair trade products", path: "SDGs12logo.svg" },
  { id: 17, name: "Check your hazard map", path: "SDGs11logo.svg" },
  { id: 18, name: "Buy products from companies that are committed to the SDGs", path: "SDGs12logo.svg" },
  { id: 19, name: "Buy food produced in your local area", path: "SDGs11logo.svg" },
  { id: 20, name: "Donate to organizations that provide vaccine support", path: "SDGs3logo.svg" },
  { id: 21, name: "Exercise moderately", path: "SDGs3logo.svg" },
  { id: 22, name: "Follow the traffic rules", path: "SDGs3logo.svg" },
  { id: 23, name: "Join educational volunteer activities", path: "SDGs4logo.svg" },
  { id: 24, name: "Monitor yourself for gender biases", path: "SDGs5logo.svg" },
  { id: 25, name: "Save water", path: "SDGs6logo.svg" },
  { id: 26, name: "Save electricity", path: "SDGs7logo.svg" },
  { id: 27, name: "Think about 'working'", path: "SDGs8logo.svg" },
  { id: 28, name: "Donate to support areas with poor infrastructure", path: "SDGs9logo.svg" },
  { id: 29, name: "Donate to humanitarian organizations", path: "SDGs10logo.svg" },
  { id: 30, name: "Pick up trash", path: "SDGs11logo.svg" },
  { id: 31, name: "Learn about war and conflict", path: "SDGs16logo.svg" }
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
  const bingoDocRef = doc(collection(db, 'BingoInfo'), userId);
  const tasks = {
    task: [task1, task2, task3, task4, task5, task6, task7, task8, task9],
    status: [0, 0, 0, 0, 0, 0, 0, 0, 0]
  };
  await setDoc(bingoDocRef, tasks)
  console.log(bingoDocRef);
  return tasks;
};

const GetDB = async () => {
  // ユーザーID取得
  const userId = auth.currentUser.uid;
  console.log(userId);

  // ビンゴ情報のドキュメント取得
  const bingoDocRef = doc(collection(db, 'BingoInfo'), userId);
  const docSnap = await getDoc(bingoDocRef);
  if (docSnap.exists()) {
    const tasks = docSnap.data();
    console.log(tasks)
    if (!tasks.task) {
      return await CreateDB();
    }
    return tasks;
  } else {
    console.log("No data. create DB.")
    return await CreateDB();
  }
}

const WriteDB = async (tasks) => {
  // ユーザーID取得
  const userId = auth.currentUser.uid;
  console.log(userId);

  // ビンゴ情報のドキュメント作成
  const bingoDocRef = doc(collection(db, 'BingoInfo'), userId);
  await setDoc(bingoDocRef, tasks)
  console.log(bingoDocRef);
  return tasks;
};

export { TaskList, CreateDB, GetDB, WriteDB };