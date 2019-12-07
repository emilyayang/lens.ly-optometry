const db = require('./index.js')

const ordersRef = db.collection('orders');

const getOrders = () => {
  // return ordersRef.get();
  return ordersRef.doc('x3oLqJYP1BHWEByFrjIT').get();
}

// const getUser = (email) => {
//   return usersRef.where('email', '==', email).get();
// }

// const postUser = (email, name) => {
//   return usersRef.doc(email).set({name});
// }
module.exports = { getOrders };

// .doc('SF').collection('landmarks').doc().set({
//   name: 'Golden Gate Bridge',
//   type: 'bridge'
// }),