// // import Head from 'next/head'
// // import Image from 'next/image'
// // import styles from '@/styles/Home.module.css'
// import React, { useState } from 'react';
// import Editor from "@monaco-editor/react";
// import Axios from 'axios'; 
// // import { compile } from 'sass';
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/firestore'

// export default function EditorPage() {
//   const [userCode, setUserCode] = useState("");
//   const [userInput, setUserInput] = useState("");
//   const [userOutput, setUserOutput] = useState("");
  
//   const sendData = (sessionId,data) => {
//     try {
//         firebase
//             .firestore()
//             .collection('test1')
//             .doc(sessionId)
//             .set({
//                 string_data: data
//             })
//             .then(alert('Data was successfully sent to cloud firestore!'))
//     } catch (error) {
//         console.log(error)
//         alert(error)
//     }
// }
  
  
//   async function  run (){
//     if (userCode===" "){
//       return;
//     }
//     await Axios.post('/api/editor', {
//       code: userCode,
//       language: "python3",
//       input: userInput 
//     }).catch(e=>console.error(e))
//   }

//   function clearOutput(){
//     userOutput("");
//   }
//   // const [inputValue, setInputValue] = useState("");
//   // console.log(inputValue)
  
//   // fetch('/api/editor',{
//   //   method: 'POST',
//   //   headers: { 'Content-Type': 'application/json' },
//   //   body: JSON.stringify({ inputValue }),
//   // }).then(response => response.json())
//   //   .then(data => console.log(data))
//   //   .catch(error => console.error(error));
  

//   return (
//     <>
//       {/* <input value={inputValue} onChange={e => setInputValue(e.target.value)} name="editor"/> */}
//       <Editor height="90vh" language="python" value={"#Write in Python"} onChange={(value) => { setUserCode(value),setUserInput(value),sendData } } />
//       <button type="submit" onClick={run}> Run </button>
//       {/* <input type="text" onChange={(value)=>{setUserInput(value)}}/> */}
//     </>
//   );
// }