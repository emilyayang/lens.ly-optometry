const admin = require('firebase-admin');
const firebaseConfig = require('../firebase.js');

// let serviceAccount = require('path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig)
});

let dbauth = admin.firestore();


firebase.initializeApp(firebaseConfig);
let db = firebase.database();

module.exports = { dbauth, db }; 