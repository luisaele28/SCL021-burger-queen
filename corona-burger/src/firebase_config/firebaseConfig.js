import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDEvJu5878Zwuz-pDIc1FccyY-IerFu5zM",
    authDomain: "burger-queen-834a4.firebaseapp.com",
    projectId: "burger-queen-834a4",
    storageBucket: "burger-queen-834a4.appspot.com",
    messagingSenderId: "977666896509",
    appId: "1:977666896509:web:4cc1c835a4fd05daec7714",
    measurementId: "G-K8WJ8EZ135"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {
  app,
  db
}