import firebaseConfig from '../../firebase.js'

(function () {

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //get elements
  const preObject = document.getElementById('object');
  //create references
  const dbRefObject = firebase.database().ref().child('object');
  //sync object changes
  dbRefObject.on('value', snap => {
    preObject.innerText = JSON.stringify(snap.val(), null, 3);

  });

}());

