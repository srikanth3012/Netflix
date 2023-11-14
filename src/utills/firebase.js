// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0a7THWVFv6vnSj_mNGJsB3pF33Qprcj8",
  authDomain: "netflix-a7831.firebaseapp.com",
  projectId: "netflix-a7831",
  storageBucket: "netflix-a7831.appspot.com",
  messagingSenderId: "20219391902",
  appId: "1:20219391902:web:30afc0c9f3cc90b3d0308f",
  measurementId: "G-65EHNKSKEN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth();
