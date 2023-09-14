// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIDxE1BeIpcKS44Hq6iCSVNPtuXWzLyTM",
  authDomain: "sample-store-db.firebaseapp.com",
  projectId: "sample-store-db",
  storageBucket: "sample-store-db.appspot.com",
  messagingSenderId: "363029054739",
  appId: "1:363029054739:web:016be7826afb2b65e886e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
