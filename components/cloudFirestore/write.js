import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const WriteToCloudFirestore =  (sessionId,data) => {
    
    const  sendData = async () => {
        console.log|("write id",sessionId)
        try {
            firebase
                .firestore()
                .collection('test1')
                .doc(sessionId)
                .set({
                    string_data: data
                })
        } catch (error) {   
            console.log(error)
        }
    }

    sendData();
}

export default WriteToCloudFirestore