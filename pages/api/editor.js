import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import Axios from 'axios';
// import {writeUserData} from "../utils/firebase/firebase.write"
export default async function handler(req, res) {
    
    

    //have to take data from database this is temperary
    const body = req.body
    console.log("server",body)
    const code = body.code
    const language = body.language
    const input = body.input
    
    const program = {
      script : code,
      language : language,
      stdin :input,
      clientId:"4abf34f0be6216fddaf1bbcd5b404e58",
      clientSecret:"78aa51385a27b83c27a9e4c4f53f979d84d87cdaff2a673c74152aea2666be1b",
      versionIndex :"3"
    }
    const url = "https://api.jdoodle.com/v1/execute";
  

    await Axios.post(url,program)
    .then((res)=>{console.log(res.data.output)})
    .catch((err)=>{console.log(err)})
    
    

    // if (!body.editor) {
    //   return res.status(400).json({ data: 'editor not found' })
    // }
    // res.status(200).json({ data: `${body.inputValue}` })  
  }