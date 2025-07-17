// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDY6fRrW3I-3JntOWM9zWGTBDPj5oZqFz0",
  authDomain: "agrimitra-36850.firebaseapp.com",
  projectId: "agrimitra-36850",
  storageBucket: "agrimitra-36850.firebasestorage.app",
  messagingSenderId: "838172276534",
  appId: "1:838172276534:web:69054f06dd8c5010c0a597",
  measurementId: "G-R7KWCGHLVV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Export functions
export { auth, provider, signInWithEmailAndPassword, signInWithPopup };
