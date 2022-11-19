//Conexión con Firebase
import { initializeApp } from "firebase/app";

import {getFirestore, collection, getDocs, addDoc, onSnapshot, query, doc, getDoc, deleteDoc } from '@firebase/firestore'
//configuracion firebase
import { firebaseConfig } from './config.js';
//Importando funciones firebase auth
import { getAuth, signInWithEmailAndPassword,  GoogleAuthProvider  } from '@firebase/auth';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Autenticación
const auth = getAuth();
// Get firestore
const db = getFirestore(app);


//Exportar funciones firebase-firestore
export { initializeApp, signInWithEmailAndPassword, auth, GoogleAuthProvider, collection, getDocs, addDoc,onSnapshot, query, doc, db, deleteDoc, getDoc };