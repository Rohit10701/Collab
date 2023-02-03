
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import firebase from "../firebase/initfirebase"
import  RandGen from '@/components/randGen';

firebase()

export default function Home() {
  const router = useRouter()
  const ToSignIn = (e) => {
    e.preventDefault()
    router.push('/signin/signPage')
  }
  return (
    <>
    
      <RandGen/>
     

      <h1>This is Home Page!</h1>
      <button onClick={ToSignIn}>To Login Page</button>  
    </>
  );
}