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