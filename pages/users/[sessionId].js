import { useRouter } from "next/router";
import React, { useState,useEffect} from 'react';
import Editor from "@monaco-editor/react";
import Axios from 'axios'; 
// import { compile } from 'sass';
import WriteToCloudFirestore from "@/components/cloudFirestore/write";
import ReadToCloudFirestore from "@/components/cloudFirestore/read";
import initFirebase from "../../firebase/initfirebase";

initFirebase()
const  SessionDetail = () => {



    const router = useRouter()
    const sessionId = router.query.sessionId
    
    const [userCode, setUserCode] = useState("");
    const [userInput, setUserInput] = useState("");
    const [userOutput, setUserOutput] = useState("");
    // const [sessionData, setSessionData] = useState(userCode);

    useEffect(() => {
      WriteToCloudFirestore(sessionId, userCode);
      const data = ReadToCloudFirestore(sessionId);
      data.then(function (result) {
        if(!!result){
          if(result.string_data!==""){
            console.log("data in useeffect",result.string_data)
            setUserCode(result.string_data)
          }
        }
        
    })},[userCode]);
   
    
    

    
    // WriteToCloudFirestore(sessionId,userCode)
    // const data = ReadToCloudFirestore(sessionId)
    // console.log(data)
    
    // let sessionData
    // const data = Promise.resolve(ReadToCloudFirestore(sessionId))
    
    
    // data.then(function(result) {
    //     return result;
    // }).then(function(result) {
    //     sessionData = result;
    //     console.log("session data new", sessionData); // Output: proi
    // });

    // console.log("outside callback data", sessionData);
    
      
    

    //Compile the Program
    async function  run (){
        if (userCode===" "){
        return;
        }
        await Axios.post('/api/editor', {
        code: userCode,
        language: "python3",
        input: userInput 
        }).catch(e=>console.error(e))
    }

    //Clear output
    function clearOutput(){
        userOutput("");
    }


    return (
      <>
        <h1>{sessionId}</h1>
        <Editor height="90vh" language="python" onChange={(value) => {setUserCode(value)}} value={userCode}/>
        <button type="submit" onClick={run}> Run </button>
      </>
    )
}

export default SessionDetail;