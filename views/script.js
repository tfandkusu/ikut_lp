import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyARKIct1ZDGrsZOTP1e1Mn4PDIjW1I10B0",
  authDomain: "ikutapp.firebaseapp.com",
  projectId: "ikutapp",
  storageBucket: "ikutapp.appspot.com",
  messagingSenderId: "654940262756",
  appId: "1:654940262756:web:13995240a9e797acad2a71",
  measurementId: "G-TY4RX189T0"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
