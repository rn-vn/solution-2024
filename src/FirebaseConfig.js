// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// goals
import { getFirestore } from "firebase/firestore";
//

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDanlkMV3YOxYKaM0WiMvMQJ16Jnug72g",
    authDomain: "solution-2024.firebaseapp.com",
    projectId: "solution-2024",
    storageBucket: "solution-2024.appspot.com",
    messagingSenderId: "249284415584",
    appId: "1:249284415584:web:bc5da1f9b955b9c5d07305",
    measurementId: "G-QN04LNLTK9"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// goals
const db = getFirestore(app);
export { db };
//

export const auth = getAuth(app);