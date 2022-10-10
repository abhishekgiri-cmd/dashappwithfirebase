import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const productCollection = db.ref("data/product");
