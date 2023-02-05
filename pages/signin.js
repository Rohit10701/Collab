import { signInWithGooglePopup,createUserDocumentFromAuth} from "../firebase/auth";
import { useRouter } from 'next/router'
import bg from '../public/back.jpeg'
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

        
            <div class="signin" style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: 'cover'
              }}>
                <div >
                    <h1 class="signin-text">SignIn Page</h1>  
                </div>
                <div class="">   
                    <button onClick={logGoogleUser} class="btn btn-dark">Sign in with Google Popup</button> 
                </div>
            </div>
        
    )
}
export default signIn;