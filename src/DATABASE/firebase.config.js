import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVSA7YdeMFzWx_Yy4iFkEwHgRzAZLYrX0",
  authDomain: "login-signup-1ecb2.firebaseapp.com",
  projectId: "login-signup-1ecb2",
  storageBucket: "login-signup-1ecb2.appspot.com",
  messagingSenderId: "68107227179",
  appId: "1:68107227179:web:a4fc2386931b8242145a6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);