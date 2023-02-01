import firebase from 'firebase/compat/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// cred for DB
const firebaseConfig = {
    apiKey: "AIzaSyDXT2uIlbmNlQD8sPcAIjobVga-wxz8GXw",
    authDomain: "collab-edf91.firebaseapp.com",
    projectId: "collab-edf91",
    storageBucket: "collab-edf91.appspot.com",
    messagingSenderId: "741336556786",
    appId: "1:741336556786:web:a43566028debc94d771c6b",
    measurementId: "G-9TJW32MNTB"
  };


// Initialize Firebase
export default function initFirebase(){
        firebase.initializeApp(firebaseConfig)
        console.log("Firebase init")
}