import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="title red">react app</h1>
      <br />
      <img src="/telechargement.jpg" />
      <br />
      <img src="/port.jpg" />
    </div>
    <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
  </div>
  );
}

export default App;
