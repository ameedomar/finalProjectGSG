import * as firebase from "firebase/app";
import "firebase/auth";

const REACT_APP_FIREBASE_KEY = "AIzaSyCaROSxt7QQgwMq6161v-IypXnM3_l1rXE";
const REACT_APP_FIREBASE_DOMAIN = "gsg-finalproject.firebaseapp.com";
// const REACT_APP_FIREBASE_DATABASE = "https://gsg-finalproject.firebaseio.com";
const REACT_APP_FIREBASE_PROJECT_ID = "gsg-finalproject";
const REACT_APP_FIREBASE_STORAGE_BUCKET = "gsg-finalproject.appspot.com";
const REACT_APP_FIREBASE_SENDER_ID = "139279014002";
const REACT_APP_FIREBASE_APP_ID = "1:139279014002:web:46e7935f421bd9874f4aeb";
const REACT_APP_FIREBASE_MEASUREMENT_ID = "G-YR7WP3MT85";

const app = firebase.initializeApp({
  apiKey: REACT_APP_FIREBASE_KEY,
  authDomain: REACT_APP_FIREBASE_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export default app;
