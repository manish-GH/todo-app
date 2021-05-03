import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD75Z51cN6q0dbPfhmUcPY1ZL0CbU1ckIY",
  authDomain: "social-bfdb7.firebaseapp.com",
  projectId: "social-bfdb7",
  storageBucket: "social-bfdb7.appspot.com",
  messagingSenderId: "362022381054",
  appId: "1:362022381054:web:402207767c37a963850caf"
})

const db = firebaseApp.firestore();

export default db;