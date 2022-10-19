// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYpcn46bXOfee8MUjPTIoWAArgR3bHfns",
  authDomain: "mytemp-app-f1e95.firebaseapp.com",
  projectId: "mytemp-app-f1e95",
  storageBucket: "mytemp-app-f1e95.appspot.com",
  messagingSenderId: "138775866607",
  appId: "1:138775866607:web:b8ef834687f00e785e7f1a",
  measurementId: "G-QTBTZYNQ2X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);
export default app;
