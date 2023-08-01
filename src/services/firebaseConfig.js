// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth }  from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtDeZen3ALgVQ0G0Vj0iKUuWZagfC_drU",
  authDomain: "paradisecricket-4e417.firebaseapp.com",
  projectId: "paradisecricket-4e417",
  storageBucket: "paradisecricket-4e417.appspot.com",
  messagingSenderId: "219343286093",
  appId: "1:219343286093:web:80871317ef3b0494a3d104",
  measurementId: "G-KD696C9ZMW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const storage = getStorage(app);
const userRef=collection(db, 'users');

export { auth, db, storage , userRef};