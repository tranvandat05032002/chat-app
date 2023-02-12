import { collection, onSnapshot, query, where } from "firebase/firestore";
import React from "react";
import { db } from "../components/firebase/config";

const useFireStore = (collectionExternal, condition) => {
  const [document, setDocument] = React.useState([]);
  React.useEffect(() => {
    let colRef = collection(db, collectionExternal);
    //condition
    /**
     * {
     * fieldName: "abc",
     * operator: "==",
     * compareValue: "abc"
     * }
     */
    let queryData;
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        return;
      }
      queryData = query(
        colRef,
        where(condition.fieldName, condition.operator, condition.compareValue)
      );
    }
    const unsubscribe = onSnapshot(queryData, (snapShot) => {
      const document = snapShot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocument(document);
    });
    return () => unsubscribe();
  }, [collectionExternal, condition]);

  return document;
};
export default useFireStore;
