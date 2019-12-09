// const { getUser, getUsers, postUser } = require('../database/dbhelpers.js');

// const controller = {
//   getOneUser: (req, res) => {
//     let {email} = req.body
//     getUser(email)
//       .then(data => res.status(200).send(data))
//       .catch(err => res.status(400).send(err))
//       // .then(snapshot => {
//       //   if (snapshot.empty) {
//       //     console.log('No matching documents.');
//       //     return;
//       //   }

//       //   snapshot.forEach(doc => {
//       //     console.log(doc.id, '=>', doc.data());
//       //   });
//       // })
//       // .catch(err => {
//       //   console.log('Error getting documents', err);
//       // });
//   }, 
//   getAllUsers: (req, res) => {
//     getUsers()
//       .then(data => res.status(200).send(data))
//       .catch(err => res.status(400).send(err))
//       // .then(snapshot => {
//       //   if (snapshot.empty) {
//       //     console.log('No matching documents.');
//       //     return;
//       //   }

//       //   snapshot.forEach(doc => {
//       //     console.log(doc.id, '=>', doc.data());
//       //   });
//       // })
//       // .catch(err => {
//       //   console.log('Error getting documents', err);
//       // });
//   }, 
//   addUser: () => {
//     postUser()
//       .then(snapshot => {
//         if (snapshot.empty) {
//           console.log('No matching documentsPOST.');
//           return;
//         }

//         snapshot.forEach(doc => {
//           console.log(doc.id, '=>', doc.data());
//         });
//       })
//       .catch(err => {
//         console.log('Error getting documentsPOST', err);
//       });
//   }
// }

// module.exports = controller;

// //   .get(function (req, res, err) {

// //     // Get a database reference to our posts
// //     const db = admin.database();
// //     const ref = db.ref("/restau");

// //     // Attach an asynchronous callback to read the data at our posts reference
// //     ref.on("value", function (snapshot) {
// //       console.log(snapshot.val());
// //     }, function (errorObject) {
// //       console.log("The read failed: " + errorObject.code);
// //     });
// //   });