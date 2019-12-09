// // const admin = require("firebase-admin");
// // const serviceAccount = require('../serviceAccountKey.json');

// // admin.initializeApp({
// //   credential: admin.credential.cert(serviceAccount),
// //   databaseURL: "https://robertson-optometry.firebaseio.com"
// // });



// 'use strict';

// // [START import]
// const functions = require('firebase-functions');
// const express = require('express');
// const app = express();
// // [END import]

// // [START middleware]
// const cors = require('cors')({origin: true});
// app.use(cors);
// // [END middleware]


// // Define the Firebase function that will act as Express application
// // Note: This `api` must match with `/firebase.json` rewrites rule.
// exports.api = functions.https.onRequest(app);

// const admin = require('firebase-admin');
// const serviceAccount = require('../serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://robertson-optometry.firebaseio.com"
// });

// const firestore = admin.firestore();


// /**
//  * Simple request that extracts data from firebase firestore (database)
//  * --------------------------------------------------------------------------------------
//  * Try: https://mock-apis-server.firebaseapp.com/userProfile/bob
//  */
// app.get('/users/:userId', (req, res) => {
//   var docRef = firestore.collection("users").doc(req.params.userId);

//   // See https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document
//   docRef.get().then((doc) => {
//       if (doc.exists) {
//           return res.status(200).json(doc.data());
//       } else {
//           return res.status(400).json({"message":"User ID not found."});
//       }
//   }).catch((error) => {
//       return res.status(400).json({"message":"Unable to connect to Firestore."});
//   });
// });