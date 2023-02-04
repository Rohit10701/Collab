import { signInWithGooglePopup,createUserDocumentFromAuth} from "../firebase/auth";
import { useRouter } from 'next/router'

const signIn = () => {
    const router = useRouter()
    const logGoogleUser = async (e) => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
        const authuid = userDocRef.firestore._authCredentials.currentUser.uid;
        e.preventDefault()
        router.push(authuid)
    };
    return (
        <div>
            <h1>SignIn Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button> 
        </div>
    )
}
export default signIn;