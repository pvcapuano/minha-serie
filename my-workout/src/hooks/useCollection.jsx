import { useState, useEffect } from "react";
import { db } from "@/config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

//posso passar a collection que eu quiser como argumento no c

const useCollection = (c) => {
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    let ref = collection(db, c);

    const unsub = onSnapshot(ref, (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });

    return () => unsub();
  }, [c]);

  return { documents };
};

export default useCollection;
