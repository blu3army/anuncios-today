// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa_rOmUvAqnF283IUlGY8F3jZg5B4fU2M",
  authDomain: "anuncios-today-320712.firebaseapp.com",
  projectId: "anuncios-today-320712",
  storageBucket: "anuncios-today-320712.appspot.com",
  messagingSenderId: "504913189459",
  appId: "1:504913189459:web:e4b8abb65a9f42868384a6",
  measurementId: "G-G2WQ1MTLYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



// const analytics = getAnalytics(app);