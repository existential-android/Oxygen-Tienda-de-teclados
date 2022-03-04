// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoKLybOl8tHabnEtRxOp_MZvEEH00O7Ag",
  authDomain: "oxygen---keyboard-store.firebaseapp.com",
  projectId: "oxygen---keyboard-store",
  storageBucket: "oxygen---keyboard-store.appspot.com",
  messagingSenderId: "873288724713",
  appId: "1:873288724713:web:01692694a76741c8c34078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default db;