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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // console.log(snapShot.data());

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
