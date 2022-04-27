import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBn9iN3p-AslOT6amwqRsT9AK9bBjMDtck",
  authDomain: "estoque-2487b.firebaseapp.com",
  projectId: "estoque-2487b",
  storageBucket: "estoque-2487b.appspot.com",
  messagingSenderId: "68410854167",
  appId: "1:68410854167:web:61f5edfb25a2f73236c552"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;