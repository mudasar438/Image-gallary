import React from 'react'
import {app} from '../firebase/firebaseConfig'
import 'firebase/storage'
import { useState, useEffect } from 'react'
import { projectFireStore } from '../firebase/firebaseConfig'
import 'firebase/firestore'
import { collection } from 'firebase/firestore'
const FirebaseHook = () => {
    const [docs, setDocs]=useState([]);
    useEffect(()=>{

        projectFireStore.collection(collection)
        .onSnapshot((snap)=>{
            let documents = [];
            snap.forEach(doc=>{
                documents.push({...doc.data(), id:doc.id})
            });
            setDocs(documents)

        })
        return unsub()
        
    } ,[collection])
  return {docs}
   

//   dshfjkhfhdgf
  
}

export default FirebaseHook
