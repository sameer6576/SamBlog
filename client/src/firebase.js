// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4a466.firebaseapp.com",
  projectId: "mern-blog-4a466",
  storageBucket: "mern-blog-4a466.appspot.com",
  messagingSenderId: "925404873419",
  appId: "1:925404873419:web:3f72ae7c2c1021813d514e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
