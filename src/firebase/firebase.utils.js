import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAvuK84tuQuAvD0AyELWBAX7mTHjABob4I',
  authDomain: 'crown-db-f4fae.firebaseapp.com',
  databaseURL: 'https://crown-db-f4fae.firebaseio.com',
  projectId: 'crown-db-f4fae',
  storageBucket: '',
  messagingSenderId: '1036440351982',
  appId: '1:1036440351982:web:c93aa0599751d216'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
