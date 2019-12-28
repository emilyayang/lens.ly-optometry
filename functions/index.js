// 'use strict';

const functions = require('firebase-functions');
const express = require('express');
const app = express();
const cors = require('cors')({ origin: true });

const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://robertson-optometry.firebaseio.com"
});

const firestore = admin.firestore();

app.use(cors);
exports.api = functions.https.onRequest(app);
app.get('/users/:userId', (req, res) => {
  let docRef = firestore.collection("users").doc(req.params.userId);

  // See https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document
  docRef.get().then((doc) => {
    if (doc.exists) {
      return res.status(200).json(doc.data());
    } else {
      return res.status(400).json({ "message": "User ID not found." });
    }
  }).catch((error) => {
    return res.status(400).json({ "message": "Unable to connect to Firestore." });
  });
});

app.get('/orders/:orderId', (req, res) => {
  let docRef = firestore.collection("orders").doc(req.params.orderId);
  docRef.get().then((doc) => {
    if (doc.exists) {
      return res.status(200).json(doc.data());
    } else {
      return res.status(400).json({ "message": "Order ID not found." });
    }
  }).catch((error) => {
    return res.status(400).json({ "message": "Unable to connect to Firestore." });
  });
});