import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB-J6nq9GvC4Ys7aQD7pyIVosl8SkFq8O0",
    authDomain: "ecommerce-app-208fc.firebaseapp.com",
    projectId: "ecommerce-app-208fc",
    storageBucket: "ecommerce-app-208fc.appspot.com",
    messagingSenderId: "212340613628",
    appId: "1:212340613628:web:9bf7d39aa559fe6303d279"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};