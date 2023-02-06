import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc } from "firebase/firestore";
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
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
export const db =  getFirestore()

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db,'users',userAuth.uid)

    const userSnapShot = await getDoc(userDocRef)
    // console.log(userSnapShot)

    if(!userSnapShot.exists()){
        const {displayName,email}=userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            });
        }
        catch(error){
            console.log("error creating the user", error.message)
        }
    }
    // console.log(userDocRef);
    return userDocRef;
}