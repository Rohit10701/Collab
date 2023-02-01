import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


export const ReadToCloudFirestore = (sessionId) => {
  const readData = async () => {
    return new Promise((resolve, reject) => {
        try {
          console.log("read id", sessionId)
          firebase
            .firestore()
            .collection('test1')
            .doc(sessionId)
            .onSnapshot(function (doc) {
              console.log("data from server", doc.data())
              resolve(
                doc.data()
                );
            })

          console.log("ok")
        } catch (err) {
          reject(err);
          console.log(err)
        }
    });
  }
  // readData().then(data => console.log("console data", data));
  return  readData();
}
export default ReadToCloudFirestore;


