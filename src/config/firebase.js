// firebase.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4VgqY1VthDKnx1OYyJHe8_XRdazWWzSE",
  authDomain: "hackday-294a6.firebaseapp.com",
  projectId: "hackday-294a6",
  storageBucket: "hackday-294a6.appspot.com",
  messagingSenderId: "142512993111",
  appId: "1:142512993111:web:3744893cde2b870aad0412",
  measurementId: "G-NBX9VKNLP6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics only if supported
let analytics = null;
if (isSupported()) {
  analytics = getAnalytics(app);
}

export { auth, db, analytics };
