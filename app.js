// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDapJIn2TPZ-GrkLaTXHQ9f9a3scI2ABDg",
  authDomain: "design-collaboration-tool.firebaseapp.com",
  projectId: "design-collaboration-tool",
  storageBucket: "design-collaboration-tool.appspot.com",
  messagingSenderId: "771198847724",
  appId: "1:771198847724:web:343ce438af915d98f9f3c9",
  measurementId: "G-GHS0ZWX2FE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth = firebase.auth();
const db = firebase.firestore();
const rtdb = firebase.database();


const authDiv = document.getElementById('auth');
const appDiv = document.getElementById('app');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signinButton = document.getElementById('signin');
const signupButton = document.getElementById('signup');
const canvas = document.getElementById('design-canvas');
const ctx = canvas.getContext('2d');


signinButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  auth.signInWithEmailandPassword(email, password)
    .catch(error => console.error('Sign In Error:', error));
});

signupButton.addEventListener('click', () => {
  const email = emailInput.value;
  const password = passwordInput.value;
  auth.createUserWithEmailandPassword(email, password)
    .catch(error => console.error('Sign Up Error:', error));
});

auth.onAuthStateChanged(user => {
  if (user) {
    authDiv.style.display = 'none';
    appDiv.style.display = 'block';
    initializeApp(user);
  } else {
    authDiv.style.display = 'block';
    appDiv.style.display = 'none';
  }
});


function initializeApp(user) {

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;


  let currentTool = 'pencil';
  document.getElementById('pencil').addEventListener('click', () => currentTool ='pencil');
  document.getElementById('line').addEventListener('click', () => currentTool ='line');
  document.getElementById('rectangle').addEventListener('click', () => currentTool ='rectangle');
  document.getElementById('circle').addEventListener('click', () => currentTool ='circle');
  document.getElementById('text').addEventListener('click', () => currentTool ='text');
}


const colorPicker = document.getElementById('color-picker');
const brushSize = document.getElementById('brush-size');

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = colorPicker.value;
  ctx.lineWidth = brushSize.value;
  ctx.lineCap = 'round';
}