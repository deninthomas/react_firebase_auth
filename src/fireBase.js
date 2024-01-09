// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj3Kcgp-tF4oryFBgXwdTQMoPh8NF6q58",
  authDomain: "react-login-e6a3f.firebaseapp.com",
  projectId: "react-login-e6a3f",
  storageBucket: "react-login-e6a3f.appspot.com",
  messagingSenderId: "304990279086",
  appId: "1:304990279086:web:d0c8719fc18ae6492ae43f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
