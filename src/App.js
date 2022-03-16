import './App.css';
import './Style.css'
import imageInSrc from "./Images/imageInSrc.jpg"
function App() {
  return (
    <div className="App">
      <div style={{border:'1px solid black', maxWidth:'100vw'}}>

        <h1 className="titleRed">Your name here</h1>

        <br/>

        <img src={imageInSrc} alt='img1' />

        <br/>

        <img src="/imageInPublic.jpg" alt='img2' />
     </div>

     <iframe width="600" height="350" src="https://www.youtube.com/embed/BXBXCcaDd_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
    
    </div>
  );
}

export default App;
