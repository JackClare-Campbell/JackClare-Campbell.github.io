import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// 🔧 Replace this config with your Firebase project's
const firebaseConfig = {
  apiKey: "AIzaSyAiHFOsF_kzem4K3Iyzqt4mqheXCwWSQl4",
  authDomain: "silly-little-website-52bd6.firebaseapp.com",
  projectId: "silly-little-website-52bd6",
  appId: "1:960177706471:web:d5f5ba248f689f3a525942"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// UI Elements
const email = document.getElementById('email');
const password = document.getElementById('password');
const signup = document.getElementById('signup');
const login = document.getElementById('login');
const logout = document.getElementById('logout');
const authSection = document.getElementById('auth-section');
const userContent = document.getElementById('user-content');
const userEmail = document.getElementById('user-email');

// Sign up
signup.addEventListener('click', () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(() => alert('Signed up!'))
    .catch(err => alert(err.message));
});

// Login
login.addEventListener('click', () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then(() => alert('Logged in!'))
    .catch(err => alert(err.message));
});

// Logout
logout.addEventListener('click', () => {
  signOut(auth);
});

// Auth State Listener
onAuthStateChanged(auth, user => {
    if (user) {
      console.log("✅ Logged in as", user.email);
      alert("Welcome, " + user.email + "!");
      authSection.style.display = 'none';
      userContent.style.display = 'block';
      logout.style.display = 'inline';
      userEmail.textContent = user.email;
    } else {
      console.log("❌ Logged out");
      alert("You are logged out.");
      authSection.style.display = 'block';
      userContent.style.display = 'none';
      logout.style.display = 'none';
    }
  });
  