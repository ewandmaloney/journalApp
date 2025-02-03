// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVa60403kgM2iPkwuAkrfyIZEaX69K08w",
  authDomain: "journal-app-5d824.firebaseapp.com",
  projectId: "journal-app-5d824",
  storageBucket: "journal-app-5d824.firebasestorage.app",
  messagingSenderId: "769226855204",
  appId: "1:769226855204:web:4ba09dc843429a1e2299b1",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
