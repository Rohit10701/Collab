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
    const [serverData, setServerData] = useState("#compile and Run or share in any language(Scroll down for output)")
    const [userOutput,setUserOutput] = useState("")
    const [userInput,setUserInput] = useState("")
    const [userLang, setUserLang] = useState("python")
    const [langPass,setLangPass] = useState("")


    console.log(userLang)
     //initital render to check database
    useEffect(() => {
      const id = router.query.sessionId
      // console.log("in use effect")
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
        // console.log("Received message from server:", data.message);
      });
  
      return () => {
        socket.disconnect();
      };
    }, [serverData]);
    
    
    useEffect(()=>{
      // console.log("emitted")
      if(socket){
        socket.emit('code', userCode);
        WriteToCloudFirestore(sessionId,userCode)
      }
    },[userCode])

  //run function
  
  

  const onRun = ()=>{
    async function  run (){ 
      try{
        // console.log("in try out")
        const resopnse = await Axios.post('/api/editor', {
          code: userCode,
          language: langPass,
          input: userInput 
          })
          // console.log("session",resopnse.data.output)
          setUserOutput(resopnse.data.output)
      }catch(err){
        console.log(err)
      }
    }
    run()
  }
    
  useEffect(()=>{
    if(userLang === "python"){
      setLangPass("python3")
    }
    else if(userLang === "java"){
      setLangPass("java")
    }
    else if(userLang === "cpp"){
      setLangPass("cpp")
    }
    else{
      setLangPass("c")
    }
  },[userLang])

  //Clear output
  function clearOutput(){
      setUserOutput("")
  }

  

    return (
      <>
      <div>
        <Editor height="84vh" language={userLang} onChange={(value) => {setUserCode(value)}} value={serverData} />
      </div>
        
        <button onClick={onRun} class="btn btn-dark editor-button"> Run </button>
        <button  onClick={clearOutput} class="btn btn-dark editor-button"> clear output </button>
        <div class="dropup">
          <button class="dropbtn btn btn-dark editor-button lang-button">{userLang}</button>
          <div class="dropup-content">
            <button onClick={() => {setUserLang("python")}}  class="btn btn-dark editor-button">python</button>
            <button onClick={() => {setUserLang("c")}}  class="btn btn-dark ">c</button>
            <button onClick={() => {setUserLang("cpp")}}  class="btn btn-dark cpp-button ">c++</button>
            <button onClick={() => {setUserLang("java")}}  class="btn btn-dark cpp-button ">java</button>
          </div>
        </div>
        <textarea class="output-box" rows="1000" value={userOutput} placeholder="output"></textarea>
      </>
    )
}

export default SessionDetail;