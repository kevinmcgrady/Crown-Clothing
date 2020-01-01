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

  // Method to add the user to the database.
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if there is no user, return out the method.
  if(!userAuth) return;

  // user ref.
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // get the user from the ref.
  const snapShop = await userRef.get();

  // check if the user exists.
  if(!snapShop.exists) {
    // store the display name and email.
    const { displayName, email } = userAuth;
    // store when the user was created.
    const createAt = new Date();

    // add the user in the users table of the database.
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch(error) {
      console.log("error creating user", error);
    }

  }

  return userRef;
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollections = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollections.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

// init the app.
firebase.initializeApp(config);

// export the firestore and auth to use in other parts of the project.
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Set up google auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();
// ensure the google popup shows every time.
googleProvider.setCustomParameters({ prompt: 'select_account' });

export default firebase;