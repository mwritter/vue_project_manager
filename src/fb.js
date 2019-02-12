import firebase from "firebase/app";
import "firebase/firestore";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBF_cvKVriauflzBs4naaboYNetSArXsZY",
  authDomain: "todo-manager-43a59.firebaseapp.com",
  databaseURL: "https://todo-manager-43a59.firebaseio.com",
  projectId: "todo-manager-43a59",
  storageBucket: "todo-manager-43a59.appspot.com",
  messagingSenderId: "1047128262351"
};
firebase.initializeApp(config);
const db = firebase.firestore();

export default db;
