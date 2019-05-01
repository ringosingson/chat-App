const functions = require("firebase-functions");

module.exports = functions.https.onRequest((request, response) => {
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
