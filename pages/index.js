
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import firebase from "../firebase/initfirebase"
import  RandGen from '@/components/randGen';
import bg from '../public/back.jpeg'
import '../styles/Home.module.css'
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
        backgroundSize: 'cover'
      }} >
      
        
        
        <div class="text-center">
          <div class=" text-center flex-container ">
              
          
              <h1 class="title" >Collab
              <p class="title-body"> <br/>Share Code in Real-time with Developers<br/>An online code editor for interviews, <br/>troubleshooting, teaching & more…</p></h1>
          </div>
          <div class=" flex-container ">
            <RandGen/>
            <button  class="btn btn-dark login_buttom " onClick={ToSignIn} >Login</button>
          </div>
    
          
        </div>  
      </div>
    );
}