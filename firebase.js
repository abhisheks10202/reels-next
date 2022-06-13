// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCA6hHqMV_YPZHzFyEhu8FPToR9v9-5uqk",
  authDomain: "reels-next-c623f.firebaseapp.com",
  projectId: "reels-next-c623f",
  storageBucket: "reels-next-c623f.appspot.com",
  messagingSenderId: "146973611809",
  appId: "1:146973611809:web:c338fe69917ef4acb41060"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const storage = getStorage();
const db = getFirestore();
export { auth,storage,db }
export default app;