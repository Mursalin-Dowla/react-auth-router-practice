// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5G6Q1JayrBWO9gjuoBBflnZhYX8oYvaM",
  authDomain: "practice-router-auth.firebaseapp.com",
  projectId: "practice-router-auth",
  storageBucket: "practice-router-auth.appspot.com",
  messagingSenderId: "269024451873",
  appId: "1:269024451873:web:b1dd52c7082956a222b260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;