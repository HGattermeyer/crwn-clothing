import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import SignInAndSignUpPage from "../pages/sign-in-and-sign-up/sign-in-and-sign-up.components";

const config = {
  apiKey: "AIzaSyD4D63xdqjBYtfNb8oMjcdKykzXHLvlpkg",
  authDomain: "crown-db-da11e.firebaseapp.com",
  projectId: "crown-db-da11e",
  storageBucket: "crown-db-da11e.appspot.com",
  messagingSenderId: "453664096129",
  appId: "1:453664096129:web:201975a4bc2d0c0014b280",
  measurementId: "G-X50G2FSFH6",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
