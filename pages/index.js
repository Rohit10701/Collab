
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
        height: '100vh',
        backgroundSize: 'cover'
      }} 
      className='index'
      >
      
        
        
        <div class="flex">
          <div class=" text-center flex-container ">
              
          
              <h1 class="title" >Collab
              <p class="title-body"> <br/>Share Code in Real-time with Developers<br/>An online userfriendly code editor, <br/>for learning, teaching and more…</p><br/>
              <RandGen/>
              <button  class="btn btn-dark login_buttom " onClick={ToSignIn} >Login</button>
              </h1>
              
          
          </div>
          <div class=" flex-container ">
            
          </div>
    
          
        </div>  
      </div>
    );
}