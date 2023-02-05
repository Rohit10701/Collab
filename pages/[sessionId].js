import { useRouter } from "next/router";
import React, { useState,useEffect} from 'react';
import Editor from "@monaco-editor/react";
import Axios from 'axios'; 
import WriteToCloudFirestore from "@/firebase/write";
import initFirebase from "../firebase/initfirebase";
import {io} from 'socket.io-client';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import handler from "./api/editor";
initFirebase()

const  SessionDetail = () => {
    //initilizing
    const router = useRouter()
    const sessionId = router.query.sessionId
    const [userCode, setUserCode] = useState("");
    const [socket, setSocket] = useState(null)
    const [serverData, setServerData] = useState("")
    const [userOutput,setUserOutput] = useState("")
    const [userInput,setUserInput] = useState("")
    //initital render to check database
    useEffect(() => {
      const id = router.query.sessionId
      console.log("in use effect")
      firebase
      .firestore()
      .collection('test1')
      .doc(sessionId)
      .onSnapshot(function(doc) {
        if (doc.exists) {
          setServerData(doc.data().string_data);
        } else {
          console.log("doc doesn't exist");
        }
      });

    }, [router.query.sessionId]);
    


    useEffect(() => {
      
      const socket = io(`ws://localhost:${sessionId}`);
      setSocket(socket);

      socket.on("hello from server", (data) => {
        setServerData(data.message)
        WriteToCloudFirestore(sessionId,data.message)
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
        WriteToCloudFirestore(sessionId,userCode)
      }
    },[userCode])

  //run function
  const onRun = ()=>{
    async function  run (){ 
      try{
        console.log("in try out")
        const resopnse = await Axios.post('/api/editor', {
          code: userCode,
          language: "python3",
          input: userInput 
          })
          console.log("session",resopnse.data.output)
          setUserOutput(resopnse.data.output)
      }catch(err){
        console.log(err)
      }
    }
    run()
  }
    


  //Clear output
  function clearOutput(){
      setUserOutput("")
  }



    return (
      <>
      <div>
        <Editor height="87vh" width="150vh" language="python" onChange={(value) => {setUserCode(value)}} value={serverData}/>
      </div>
        
        <button onClick={onRun} class="btn btn-dark editor-button"> Run </button>
        <button  onClick={clearOutput} class="btn btn-dark editor-button"> clear output </button>
        
        <textarea class="input-box" rows="1000" placeholder=" Type the input before clicking the run"></textarea>
        <textarea class="output-box" rows="1000" value={userOutput} placeholder="  output"></textarea>
      </>
    )
}

export default SessionDetail;