// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase 프로젝트 설정 (Firebase 콘솔에서 가져온 값 입력)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "cookie-75b27.firebaseapp.com",
  projectId: "cookie-75b27",
  storageBucket: "cookie-75b27.firebasestorage.app",
  messagingSenderId: "421349658510",
  appId: "1:421349658510:web:92dedf83f41207ce071edf",
  measurementId: "G-259TW3LMGR"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firestore 초기화
const db = getFirestore(app);

export { db };
