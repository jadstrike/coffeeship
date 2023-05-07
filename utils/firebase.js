// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log(import.meta.env.VITE_API_KEY);
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_API_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_API_AUTH_PROJECTID,
  storageBucket: import.meta.env.VITE_API_AUTH_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_API_AUTH_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_API_AUTH_APPID,
  measurementId: import.meta.env.VITE_API_AUTH_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
