// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN5vMEaN7wusrSgpPkxuMZVAMgJEh1DB0",
  authDomain: "food-app-e122b.firebaseapp.com",
  projectId: "food-app-e122b",
  storageBucket: "food-app-e122b.firebasestorage.app",
  messagingSenderId: "948484070146",
  appId: "1:948484070146:web:abcf652fc4a14b913d401b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {auth,fireDB};