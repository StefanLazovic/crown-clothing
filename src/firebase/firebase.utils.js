import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAZ6gweT6E9J74O9bQIkmaopFCtonEHyJM",
  authDomain: "crown-db-36720.firebaseapp.com",
  databaseURL: "https://crown-db-36720.firebaseio.com",
  projectId: "crown-db-36720",
  storageBucket: "crown-db-36720.appspot.com",
  messagingSenderId: "287308633684",
  appId: "1:287308633684:web:1d05a6bae055debb39bfc1",
  measurementId: "G-WHFMCBLMZ7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
