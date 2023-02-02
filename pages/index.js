// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import React, { useState } from 'react';
import Editor from "@monaco-editor/react";
import Axios from 'axios'; 
import { useRouter } from 'next/router'
// import { compile } from 'sass';
import firebase from "../firebase/initfirebase"
import WriteToCloudFirestore from '@/firebase/write';
import ReadToCloudFirestore from '@/firebase/read';
import  RandGen from '@/components/randGen';

firebase()

export default function Home() {
  const router = useRouter()
  const ToSignIn = (e) => {
    e.preventDefault()
    router.push('/signin/signPage')
  }
  // const randomString = RandGen();
  // console.log(randomString)
  // const UserPage = (e) =>{
  //   e.preventDefault()
  //   router.push('/users/')
  // }
 
  return (
    <>
    
      <RandGen/>
     

      <h1>This is Home Page!</h1>
      <button onClick={ToSignIn}>To Login Page</button>
      {/* <button onClick={UserPage}>To User Page</button> */}
      
    </>
  );
}