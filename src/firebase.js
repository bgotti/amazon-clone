import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAIaxUWHLqsTfT83dBkAaMkFsZ5FeqCFF0",
  authDomain: "clone-afceb.firebaseapp.com",
  databaseURL: "https://clone-afceb.firebaseio.com",
  projectId: "clone-afceb",
  storageBucket: "clone-afceb.appspot.com",
  messagingSenderId: "406318482328",
  appId: "1:406318482328:web:ea7d056c097cc75c43e1ed",
  measurementId: "G-QS6X669R43"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };