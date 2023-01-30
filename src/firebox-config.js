import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWvo_aff0c4VI80FF75sSoy54XnDwmkdc",
    authDomain: "service-records-bead2.firebaseapp.com",
    projectId: "service-records-bead2",
    storageBucket: "service-records-bead2.appspot.com",
    messagingSenderId: "1079772147706",
    appId: "1:1079772147706:web:89ba41910df28d7b483e43",
    measurementId: "G-GFXS2JR9K5"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)