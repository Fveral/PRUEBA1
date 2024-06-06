// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRkZspbsYYzN70K8WxCQ3fv2X3iZHtt8s",
  authDomain: "examen1-7e1d8.firebaseapp.com",
  projectId: "examen1-7e1d8",
  storageBucket: "examen1-7e1d8.appspot.com",
  messagingSenderId: "968509668617",
  appId: "1:968509668617:web:81182e99e9fd7c54e827d8",
  measurementId: "G-1HYWJD92BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);


export { db, auth };