import { db } from "../firebase-config";

import { collection, getDocs, getDoc, addDoc, doc } from "firebase/firestore";

const TaskCollectionRef = collection(db, "temp");
class TaskMethod {
  addTasks = (newTemp) => {
    return addDoc(TaskCollectionRef, newTemp);
  };

  getAllTask = () => {
    return getDocs(TaskCollectionRef);
  };

  getTask = (id) => {
    const tempDoc = doc(db, "temp", id);
    return getDoc(tempDoc);
  };
}

export default new TaskMethod();
