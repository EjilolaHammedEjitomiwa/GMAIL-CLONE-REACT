// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDwldmDdd9DLs9WilIwAEYojIbb3t0CqBs",
  authDomain: "clone-7e296.firebaseapp.com",
  projectId: "clone-7e296",
  storageBucket: "clone-7e296.appspot.com",
  messagingSenderId: "427046421162",
  appId: "1:427046421162:web:520c352b91be6d306046d3",
  measurementId: "G-08M97YYWWS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
