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
  apiKey: "AIzaSyAw47ykoqBYenf4-MJThQIfT0aEpb68gcY",
  authDomain: "fir-app-619c4.firebaseapp.com",
  databaseURL: "https://fir-app-619c4-default-rtdb.firebaseio.com",
  projectId: "fir-app-619c4",
  storageBucket: "fir-app-619c4.appspot.com",
  messagingSenderId: "307139123343",
  appId: "1:307139123343:web:d9a772f14783cd445838fa",
  measurementId: "G-T5LW512BJS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const db = getFirestore(app);
export default app;
