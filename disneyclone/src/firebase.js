// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
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
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;