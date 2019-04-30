import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDgTfsHPv7L63JNEV7I0JRueVX05SwlOvM",
  authDomain: "chat-app-2765a.firebaseapp.com",
  databaseURL: "https://chat-app-2765a.firebaseio.com",
  projectId: "chat-app-2765a",
  storageBucket: "chat-app-2765a.appspot.com",
  messagingSenderId: "820428682970"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export { db, firebase };
