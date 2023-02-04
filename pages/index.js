
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import firebase from "../firebase/initfirebase"
import  RandGen from '@/components/randGen';
import bg from '../public/placeholder.png'
firebase()

export default function Home() {
  const router = useRouter()
  const ToSignIn = (e) => {
    e.preventDefault()
    router.push('/signin')
  }
  return (

    
      <div style={{
        backgroundImage: `url(${bg.src})`,
        width: '100%',
        height: '100%',
      }}>
        <div>
          <RandGen/>
        </div>
        
        <h1>This is Home Page!</h1>
        <button onClick={ToSignIn}>To Login Page</button>  
      </div>
    );
}