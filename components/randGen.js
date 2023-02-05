import { useRouter } from "next/router"

const RandGen = () => {
    const router = useRouter()
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    async function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
    
    const randStr = async (e) =>{
        const randomString = await generateString(6);
        e.preventDefault()
        router.push(randomString)
    }

    return (
        <button onClick={randStr} class="btn btn-dark login_buttom">Anonymous</button>
    )
}
export default RandGen;
