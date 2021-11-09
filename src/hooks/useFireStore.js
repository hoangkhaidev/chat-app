/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useFireStore = (collection, condition) => {
  const [documents, setDocuments] = useState([]); 
  
  useEffect(() => {
    let collectionRef = db.collection(collection).orderBy('createAt');
    // condition
    // {
    //     fieldName: 'name',
    //     operator: '==',
    //     compareValue: 'Tung'
    // }
    if (condition) {
        if (!condition.compareValue || !condition.compareValue.length) {
            return;
        }
        
        collectionRef = collectionRef.where(
            condition.fieldName,
            condition.operator,
            condition.compareValue
        )
    }

    

    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
        const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        }));
        setDocuments(documents);
    });
    
    return unsubscribe;
  }, [collection, condition]);

  return documents;
}

export default useFireStore;