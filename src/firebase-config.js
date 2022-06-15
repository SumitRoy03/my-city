import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwRWQVE_yhL102fLfEC_b35DvYb9pjkuk",
  authDomain: "my-city-details.firebaseapp.com",
  projectId: "my-city-details",
  storageBucket: "my-city-details.appspot.com",
  messagingSenderId: "518297338020",
  appId: "1:518297338020:web:30ac51d03a1910e5d1a631",
  measurementId: "G-G8MEQ9NB93",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
