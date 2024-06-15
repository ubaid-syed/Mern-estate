// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ad764.firebaseapp.com",
  projectId: "mern-estate-ad764",
  storageBucket: "mern-estate-ad764.appspot.com",
  messagingSenderId: "461998863402",
  appId: "1:461998863402:web:1eb87310f7f63abe453f53",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
