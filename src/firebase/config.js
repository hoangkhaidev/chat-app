import firebase from "firebase/compat/app";
import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAJobeuqsSWWy_6DKQbcEMYyKeNz4Rbifw",
  authDomain: "chat-app-798e3.firebaseapp.com",
  projectId: "chat-app-798e3",
  storageBucket: "chat-app-798e3.appspot.com",
  messagingSenderId: "647838653664",
  appId: "1:647838653664:web:75e62ba979d6e6baee4485",
  measurementId: "G-46DGP96FGL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;