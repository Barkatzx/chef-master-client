// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9OJbf2Xcluz4MEcHM18cC-r1ZZd38gvg",
  authDomain: "chef-master-auth-firebase.firebaseapp.com",
  projectId: "chef-master-auth-firebase",
  storageBucket: "chef-master-auth-firebase.appspot.com",
  messagingSenderId: "653795335977",
  appId: "1:653795335977:web:0c5a1b1fac688691256138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;