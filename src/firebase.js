
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCNy7vVM8xqlHHrgKn1bBPpFbKKBct0f6Q",
    authDomain: "speedcontrol-ba2ed.firebaseapp.com",
    projectId: "speedcontrol-ba2ed",
    storageBucket: "speedcontrol-ba2ed.appspot.com",
    messagingSenderId: "273985573107",
    appId: "1:273985573107:web:3bf179f45b91ba7777a786",
    measurementId: "G-Z9CHGJ0YKT"
  };

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);