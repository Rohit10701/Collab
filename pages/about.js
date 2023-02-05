import bg from '../public/back.jpeg'
export default function About(){
    return(
        <>
            <div class="about-body" style={{
                backgroundImage: `url(${bg.src})`,
                backgroundSize: 'cover'
              }}>
                <h1 class="about-title" >Welcome to Collab</h1>
                <p class="about-content">Welcome to our collaborative coding platform! <br/>Our website allows you to share your code in real-time with others<br/> and run your code directly from the browser.</p>
            </div>
            
        </>
    )
}