// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBj3oskUjsG2IbdFyHkQT80sWX-k3Rw-SA",
  authDomain: "disneypluse-clone-4ca12.firebaseapp.com",
  projectId: "disneypluse-clone-4ca12",
  storageBucket: "disneypluse-clone-4ca12.firebasestorage.app",
  messagingSenderId: "18543598418",
  appId: "1:18543598418:web:b556a309d848e8ccdcf88b",
  measurementId: "G-WLCYM637XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebaseApp.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();