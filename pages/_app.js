import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import '../styles/globals.css'
import Image from 'next/image'
export default function App({ Component, pageProps }) {
  return (
    <div >
      
      <nav class="navbar navbar-default ">
        <div class="container-fluid">
            <div class="navbar-header">
              <a href="/" class="navbar-brand home_margin">Home</a>
            </div>
            <div>
              <a href="/about">
                <button type="button" class="btn btn-default navbar-btn ">About</button>
              </a>
              <a href="/signin">
                <button type="button" class="btn btn-default navbar-btn home_margin">Login</button>
              </a>
            </div>
            
        </div>
        
      </nav>


      
      <Component {...pageProps} />
      <div>
            <footer class=" text-center text-black footer">
              <div class="text-center p-3">
                © 2023 Copyright: Rohit Kumar
              </div>

            </footer>
          </div>
    </div>
  )
}
