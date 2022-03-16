import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4GOP4JjLa-20-Pbjz1PD9neyQ-5MM6UE",
  authDomain: "react-crud-a9327.firebaseapp.com",
  projectId: "react-crud-a9327",
  storageBucket: "react-crud-a9327.appspot.com",
  messagingSenderId: "384572036521",
  appId: "1:384572036521:web:049aa631067c6e108d60b8",
  measurementId: "G-M3EZXQF4NF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);