import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIRkno8PwnW1qWg2o9rZgQYpNhIzg7Vmc",
  authDomain: "sharecircle-f1265.firebaseapp.com",
  projectId: "sharecircle-f1265",
  storageBucket: "sharecircle-f1265.appspot.com",
  messagingSenderId: "540423055910",
  appId: "1:540423055910:web:b96d44cc1b99da089854e7",
  measurementId: "G-9VXMGX3ZFK"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);