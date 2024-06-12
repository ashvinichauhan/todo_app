import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtIupRA5LxSZsXEnjpr0EFkFx-dSmAbxk",
  authDomain: "to-do-app-1be58.firebaseapp.com",
  projectId: "to-do-app-1be58",
  storageBucket: "to-do-app-1be58.appspot.com",
  messagingSenderId: "938360300219",
  appId: "1:938360300219:web:2151270d5ade269b523f9e",
  measurementId: "G-KE1ZH5NQ9K"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

export default db;
