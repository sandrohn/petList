import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDZxNhhP1nTHrZcMkesoz0SMLBYzmQyoag",
    authDomain: "petlist-a713d.firebaseapp.com",
    projectId: "petlist-a713d",
    storageBucket: "petlist-a713d.appspot.com",
    messagingSenderId: "992399894008",
    appId: "1:992399894008:web:a720b6157f3d3608e5a20d",
    measurementId: "G-NDHN78F1Z4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app




