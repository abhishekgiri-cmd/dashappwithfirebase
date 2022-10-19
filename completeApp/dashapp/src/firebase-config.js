import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYpcn46bXOfee8MUjPTIoWAArgR3bHfns",
  authDomain: "mytemp-app-f1e95.firebaseapp.com",
  projectId: "mytemp-app-f1e95",
  storageBucket: "mytemp-app-f1e95.appspot.com",
  messagingSenderId: "138775866607",
  appId: "1:138775866607:web:b8ef834687f00e785e7f1a",
  measurementId: "G-QTBTZYNQ2X",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const productCollection = db.ref("data/product");
