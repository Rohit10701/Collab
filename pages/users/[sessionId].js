import { useRouter } from "next/router";
import React, { useState,useEffect} from 'react';
import Editor from "@monaco-editor/react";
import Axios from 'axios'; 
// import { compile } from 'sass';
import WriteToCloudFirestore from "@/firebase/write";
import ReadToCloudFirestore from "@/firebase/read";
import initFirebase from "../../firebase/initfirebase";
import {io} from 'socket.io-client';

initFirebase()
const  SessionDetail = () => {
    const router = useRouter()
    const sessionId = router.query.sessionId
    const [userCode, setUserCode] = useState("");
    const [socket, setSocket] = useState(null)
    const [serverData, setServerData] = useState("")
    const [userOutput,setUserOutput] = useState("")
    
    
    useEffect(() => {
      
      const socket = io("ws://localhost:3030");
      setSocket(socket);

      socket.on("hello from server", (data) => {
        setServerData(data.message)
        console.log("Received message from server:", data.message);
      });
  
      return () => {
        socket.disconnect();
      };
    }, [serverData]);
    
    
    useEffect(()=>{
      console.log("emitted")
      if(socket){
        socket.emit('code', userCode);
      }
    },[userCode])

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
        <Editor height="80vh" language="python" onChange={(value) => {setUserCode(value)}} value={serverData}/>
        <button type="submit" onClick={run}> Run </button>
      </>
    )
}

export default SessionDetail;