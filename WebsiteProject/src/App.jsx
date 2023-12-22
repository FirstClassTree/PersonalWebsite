import Nav from './components/Navi'
import FlexVideo from "./components/FlexVideo";
import neonVideo from "./assets/neonVideo.mp4";

function App() {
  return (
    <>
      <Nav />
      <FlexVideo videoSrc={neonVideo} text ={"Hello"} >

      </FlexVideo>

      

    </>
  );
}

export default App;