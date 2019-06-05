const firebase = require('firebase');

firebase.initializeApp({
  apiKey: "AIzaSyDgEax6YLQYF9_dxAqASiWM5X1LrphHSKE",
  authDomain: "todolistnode-37891.firebaseapp.com",
  databaseURL: "https://todolistnode-37891.firebaseio.com",
  projectId: "todolistnode-37891",
  storageBucket: "todolistnode-37891.appspot.com",
  messagingSenderId: "369134548898",
  appId: "1:369134548898:web:f9b1f4a9ed58bbc8"
});

module.exports = firebase.database();