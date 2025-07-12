// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDwAuWv-_EnzyQ1GI_X7Pqnt7VNu07R2kU",
  authDomain: "focused-sprite-463715-a5.firebaseapp.com",
  projectId: "focused-sprite-463715-a5",
  storageBucket: "focused-sprite-463715-a5.firebasestorage.app",
  messagingSenderId: "518198321332",
  appId: "1:518198321332:web:4d97a757ec7cfa86a277e1",
  measurementId: "G-XTF6TSKB9G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Exporting for use in index.html
export { auth, provider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword };
