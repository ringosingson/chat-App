const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

exports.onUserStatusChanged = functions.database
  .ref("status/{userId}")
  .onUpdate((change, context) => {
    const eventStatus = change.after.val();
    const userDoc = db.doc(`users/${context.params.userId}`);
    return change.after.ref.once("value").then(snapshot => {
      const status = snapshot.val();
      if (status.lastChanged > eventStatus.lastChanged) {
        return;
      }
      eventStatus.lastChanged = new Date(eventStatus.lastChanged);
      userDoc.update({
        status: eventStatus
      });
    });
  });

exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log("Hello there!");
  if (Math.random() > 0.25) {
    console.error("Blow up!");
  } else if (Math.random() > 0.25) {
    throw new Error("hey!!");
  } else {
    console.log("hey u");
  }
  response.send("Hello with errors and stuff!");
});
