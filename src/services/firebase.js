import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apikey,
  authDomain: "chat-e3d99.firebaseapp.com",
  projectId: "chat-e3d99",
  storageBucket: "chat-e3d99.appspot.com",
  messagingSenderId: "686700208226",
  appId: "1:686700208226:web:05632c56d4baeb0813313b"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
