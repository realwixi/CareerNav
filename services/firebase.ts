
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyADJAnsri5RCR_92frK4gC5llBJv7snrno",
  authDomain: "ai-career-navigator-ec700.firebaseapp.com",
  projectId: "ai-career-navigator-ec700",
  storageBucket: "ai-career-navigator-ec700.firebasestorage.app",
  messagingSenderId: "608980492505",
  appId: "1:608980492505:web:bbf5d5fe0819bd1a149ec8",
  measurementId: "G-CLRZFNG8JY",
  databaseURL: "https://ai-career-navigator-ec700-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const db = firebase.database();
   