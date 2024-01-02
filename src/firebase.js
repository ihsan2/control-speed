
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyClf64ia_1t1GoQh4CjLzvHxQ0N_vKdnDE",
  authDomain: "tesiot-6c1e9.firebaseapp.com",
  databaseURL: "https://tesiot-6c1e9-default-rtdb.firebaseio.com",
  projectId: "tesiot-6c1e9",
  storageBucket: "tesiot-6c1e9.appspot.com",
  messagingSenderId: "28467746570",
  appId: "1:28467746570:web:d2e75f893462a088610cf3",
  measurementId: "G-DD3DZ2MNY8"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);