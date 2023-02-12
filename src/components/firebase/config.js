// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_xOpN4FDy1-BPpjkBm9vuK88herTzDfk",
  authDomain: "chat-app-fb52f.firebaseapp.com",
  projectId: "chat-app-fb52f",
  storageBucket: "chat-app-fb52f.appspot.com",
  messagingSenderId: "1078501177580",
  appId: "1:1078501177580:web:bb9093d7561d8c1eae8dc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
