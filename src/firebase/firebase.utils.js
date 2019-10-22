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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
