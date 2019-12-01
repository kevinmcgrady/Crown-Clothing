// Require firebase.
import firebase from 'firebase/app';
// require the firestore.
import 'firebase/firestore';
// require the firebase auth.
import 'firebase/auth';

// Config object
const config = {
    apiKey: "AIzaSyABH2FIIQhtIwNEVefTiRkZBd0bejzocGI",
    authDomain: "crwn-db-14787.firebaseapp.com",
    databaseURL: "https://crwn-db-14787.firebaseio.com",
    projectId: "crwn-db-14787",
    storageBucket: "crwn-db-14787.appspot.com",
    messagingSenderId: "349716259105",
    appId: "1:349716259105:web:8096789e4840cd065ede60",
    measurementId: "G-CV70EFNRGV"
  }

// init the app.
firebase.initializeApp(config);

// export the firestore and auth to use in other parts of the project.
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up google auth
const provider = new firebase.auth.GoogleAuthProvider();
// ensure the google popup shows every time.
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;