// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }  from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdVRnb2EAMHHmzb-8YTO0FUUn8-RC-oZs",
  authDomain: "paradise-cricket.firebaseapp.com",
  projectId: "paradise-cricket",
  storageBucket: "paradise-cricket.appspot.com",
  messagingSenderId: "341551155512",
  appId: "1:341551155512:web:007161f9d76bc0e7bad9cd",
  measurementId: "G-G6HR1XDW05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const userRef=collection(db, 'users');

export { auth, db , userRef};