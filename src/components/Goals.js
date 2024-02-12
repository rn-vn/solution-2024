import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig";

// データを追加するコレクションを指定
//// const usersCollection = collection(db, "Goals");

// 新しいドキュメントを追加
//// const newGoal = {
////   title: "飢餓をゼロに",
////   introduction: "飢餓をゼロに"
//// };

// ドキュメントを追加
//// const docRef = await addDoc(usersCollection, newGoal);

//// console.log("Document written with ID: ", docRef.id);

const GoalsList = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const goalsCollection = collection(db, "Goals");
      const goalsSnapshot = await getDocs(goalsCollection);
      const goalsData = goalsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setGoals(goalsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Goals List</h2>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <strong>{goal.title}</strong>
            <p>{goal.introduction}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsList;