import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAM0VN7_QepVUxTuEDsOMQLQ-RjYb2npVk",
  authDomain: "wasel-c4c40.firebaseapp.com",
  databaseURL: "https://wasel-c4c40.firebaseio.com",
  projectId: "wasel-c4c40",
  storageBucket: "wasel-c4c40.appspot.com",
  messagingSenderId: "146262612536",
  appId: "1:146262612536:web:e98ad0c7f71c70ca4164cd",
  measurementId: "G-92CLEH0TVL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
