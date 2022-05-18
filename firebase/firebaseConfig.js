// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {firebase} from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ0ZqrX2uIuDSAG8k28F5NWG7Ds4N-U8k",
  authDomain: "images-gallery-e905e.firebaseapp.com",
  projectId: "images-gallery-e905e",
  storageBucket: "images-gallery-e905e.appspot.com",
  messagingSenderId: "916404861524",
  appId: "1:916404861524:web:b743af15b14f8a30c10bc1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)

//  const projectStorage = firebase.storage();
// const projectFireStore =  firebase.firestore();

// export {projectStorage , projectFireStore} ;