// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC477Qau37Ysk1fZQ8NdvLXPC7bOOSwQm4",
  authDomain: "notflix-001.firebaseapp.com",
  projectId: "notflix-001",
  storageBucket: "notflix-001.appspot.com",
  messagingSenderId: "191983529605",
  appId: "1:191983529605:web:b673f80adc16d569c103ec",
  measurementId: "G-CM1EPHFJNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);