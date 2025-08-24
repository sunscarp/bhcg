// Firebase client initialization for Google Auth
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSX0z4VznL_VPmw9tNIKjNr7cTm5m3moQ",
  authDomain: "bhcgevent.firebaseapp.com",
  projectId: "bhcgevent",
  storageBucket: "bhcgevent.firebasestorage.app",
  messagingSenderId: "886395986522",
  appId: "1:886395986522:web:1631687354cef7feb96e63",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };
