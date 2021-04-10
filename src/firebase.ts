import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebasestorage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA_xK3Gj9_HoPoAjKTFcO0yLy6jBR9m_VA',
  authDomain: 'distribution-site-de0b9.firebaseapp.com',
  projectId: 'distribution-site-de0b9',
  storageBucket: 'distribution-site-de0b9.appspot.com',
  messagingSenderId: '29296014991',
  appId: '1:29296014991:web:0c77cde5795ed4cdf0e2fa',
  measurementId: 'G-531DFLNTCH',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
