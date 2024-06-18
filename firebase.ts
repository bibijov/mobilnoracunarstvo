import { initializeApp } from 'firebase/app';
import {collection, getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB4H-5Ofjz3aXptkpggzmHfVdCU9l_OU24",
    authDomain: "mobrac-736c0.firebaseapp.com",
    projectId: "mobrac-736c0",
    storageBucket: "mobrac-736c0.appspot.com",
    messagingSenderId: "713776432626",
    appId: "1:713776432626:web:61a37fc59741020608d76b",
    measurementId: "G-C8CGGBXZ26"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore();
  export const upitiRef = collection(db, 'upiti');