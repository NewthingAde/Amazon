import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtOdTGLHaePG3GX1mtLQahn5aKEYmjo-8",
    authDomain: "clone-challenge-d4344.firebaseapp.com",
    projectId: "clone-challenge-d4344",
    storageBucket: "clone-challenge-d4344.appspot.com",
    messagingSenderId: "343964000341",
    appId: "1:343964000341:web:9971237ee9451d9ec834dc",
    measurementId: "G-0GJ8955PD0"
  }; 

   const firebaseApp = firebase.initializeApp(firebaseConfig);

   const db = firebaseApp.firestore();
   const auth = firebase.auth();


   export {db, auth};