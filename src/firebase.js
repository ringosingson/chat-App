import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

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
const rtdb = firebase.database();

export function setupPresence(user) {
  const isOfflineForRTDB = {
    state: "offline",
    lastChanged: firebase.database.ServerValue.TIMESTAMP
  };

  const isOnlineforRTDB = {
    state: "online",
    lastChanged: firebase.database.ServerValue.TIMESTAMP
  };

  const isOfflineForFirestore = {
    state: "offline",
    lastChanged: firebase.firestore.FieldValue.serverTimestamp()
  };

  const isOnlineforFirestore = {
    state: "online",
    lastChanged: firebase.firestore.FieldValue.serverTimestamp()
  };

  const rtdbRef = rtdb.ref(`/status/${user.uid}`);
  const userDoc = db.doc(`users/${user.uid}`);

  rtdb.ref(".info/connected").on("value", async snapshot => {
    if (snapshot.val() === false) {
      userDoc.update({
        status: isOfflineForFirestore
      });
      return;
    }
    await rtdbRef.onDisconnect().set(isOfflineForRTDB);
    rtdbRef.set(isOnlineforRTDB);
    userDoc.update({
      status: isOnlineforFirestore
    });
  });
}

export { db, firebase };
