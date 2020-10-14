import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyD3FRUN06mMD-L73bs94oy7st67EhJSxaw",
  authDomain: "inpen-dansim.firebaseapp.com",
  databaseURL: "https://inpen-dansim.firebaseio.com",
  projectId: "inpen-dansim",
  storageBucket: "inpen-dansim.appspot.com",
  messagingSenderId: "568175520459",
  appId: "1:568175520459:web:ef8e5c399a9707720f094e",
  measurementId: "G-EKB4MK33PW"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");

// export utils/refs
export { db, auth, usersCollection };
