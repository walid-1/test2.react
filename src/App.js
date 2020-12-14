import imageInSrc from './port.jpg';
import videoSrc from './videoSrc.mp4'
import './App.css';

function App() {
  return (
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">react app</h1>
      <br />
      <img src='/téléchargement.jpg' alt='a' />
      <br />
      <img src={imageInSrc} alt='b' />
    </div>
    <video width={320} height={240} controls src= {videoSrc} />
         
  </div>
  );
}

export default App;
