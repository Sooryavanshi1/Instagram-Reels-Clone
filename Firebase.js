import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBovnTtTqZMse1BHG-Q-1jkv7p3w4KOk_0",
    authDomain: "reels-3ce9d.firebaseapp.com",
    projectId: "reels-3ce9d",
    storageBucket: "reels-3ce9d.appspot.com",
    messagingSenderId: "272210665778",
    appId: "1:272210665778:web:95bba8f9b9057c91cd772b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth=firebase.auth()
const firestore=firebase.firestore();
export const database={
  users:firestore.collection('users'),
  posts:firestore.collection('posts'),
  comments:firestore.collection('comments'),
  getTimeStamp:firebase.firestore.FieldValue.serverTimestamp
}
export const storage=firebase.storage()
