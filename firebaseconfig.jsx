// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apk = import.meta.env.VITE_FIREBASE_API_KEY
// console.log(apk)
const firebaseConfig = {
  apiKey: apk,
  authDomain: "portifyr.firebaseapp.com",
  projectId: "portifyr",
  storageBucket: "portifyr.firebasestorage.app",
  messagingSenderId: "810957147589",
  appId: "1:810957147589:web:0a3a0cf44c18c44fdc4fac",
  measurementId: "G-ZQY6BHVM4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export{ auth, provider };