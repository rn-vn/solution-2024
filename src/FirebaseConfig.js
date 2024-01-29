import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBDanlkMV3YOxYKaM0WiMvMQJ16Jnug72g",
    authDomain: "solution-2024.firebaseapp.com",
    projectId: "solution-2024",
    storageBucket: "solution-2024.appspot.com",
    messagingSenderId: "249284415584",
    appId: "1:249284415584:web:bc5da1f9b955b9c5d07305",
    measurementId: "G-QN04LNLTK9"

};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);