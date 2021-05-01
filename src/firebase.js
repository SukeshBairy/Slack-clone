import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAdx-K8cNRf3ZR21U8qitimPydcSjxRLkk",
    authDomain: "slack-clone-20207.firebaseapp.com",
    projectId: "slack-clone-20207",
    storageBucket: "slack-clone-20207.appspot.com",
    messagingSenderId: "809775087577",
    appId: "1:809775087577:web:97f23a7e0fa39753e5a3c8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };