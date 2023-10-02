// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLSmAUmFk73h5lZODtTtIy1SHnFs_rYlE",
  authDomain: "clean-city-b77e7.firebaseapp.com",
  projectId: "clean-city-b77e7",
  storageBucket: "clean-city-b77e7.appspot.com",
  messagingSenderId: "53879146009",
  appId: "1:53879146009:web:299ed456c170c18a2dcc88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;