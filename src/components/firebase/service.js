import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export default function addDocument(collectionExternal, DataExternal) {
  const colRef = collection(db, collectionExternal);
  addDoc(colRef, {
    ...DataExternal,
    createdAt: serverTimestamp(),
  }).then((sc) => {
    console.log("addDoc successfully!");
  })
  .catch((error) => {
    console.log(error.message);
  });
}
