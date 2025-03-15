import Nav from './components/Navi'
import FlexVideo from "./components/FlexVideo";
import neonVideo from "./assets/neonVideo.mp4";
import SvgContainer from './components/SvgContainer';
import Grid from '@mui/joy/Grid';
import Typography from '@mui/joy/Typography';


function App() {
  return (
    <div className="main">
      <Nav />
      <FlexVideo opacity={true} contain={false} videoSrc={neonVideo} text ={"Hello"} ></FlexVideo>
      <div className='fadeinPage'> 
      <Grid  direction={"row"} container spacing={1} sx={{flexGrow:1, margin: "0.4rem" }}>
      <Grid xs={3}sm={3}>
      <SvgContainer numberFromLatest={1}/>
      </Grid>
      <Grid xs={6}sm={6} style={{ display: 'flex' , alignItems: 'center', justifyContent:'center' }}>
      <Typography sx={{textDecoration: 'underline'}}  textColor={'#626AFF'} textAlign={'center'}  level='h1' >
       Welcome to my Website
        </Typography>
      </Grid>
      <Grid xs={3}sm={3}>
      <SvgContainer numberFromLatest={2}/>
      </Grid>
      <Grid xs={3}sm={3} style={{ display: 'flex' , alignItems: 'center', justifyContent:'center' }}>
      <Typography textColor={'#626AFF'} textAlign={'center'}  level='h2' >
      This website design is
        </Typography>
      </Grid>
      <Grid xs={3}sm={3}>
      <SvgContainer numberFromLatest={3}/>
      </Grid>
      <Grid xs={3}sm={3}>
      <SvgContainer numberFromLatest={4}/>
      </Grid>
      <Grid xs={3}sm={3} style={{ display: 'flex' , alignItems: 'center', justifyContent:'center' }}>
      <Typography textColor={'#626AFF'} textAlign={'center'}  level='h2' >
       influenced by user input
        </Typography>
      </Grid>
      <Grid xs={12}sm={12} style={{ display: 'flex' , alignItems: 'center', justifyContent:'center' }}>
      <Typography textColor={'#626AFF'}   textAlign={'center'}  level='h2' >
      The Drawings Around are Generated from user input created on the draw page, and are being updated & rendered in real time.
        </Typography>
      </Grid>

      <Grid xs={3}sm={3}>
      <SvgContainer numberFromLatest={5}/>
      </Grid>
      <Grid xs={3}sm={3}>
      <SvgContainer numberFromLatest={6}/>
      </Grid>
      <Grid xs={3}sm={3}>
      <SvgContainer numberFromLatest={7}/>
      </Grid>
      <Grid xs={3}sm={3}>
      <SvgContainer numberFromLatest={8}/>
      </Grid>
      <Grid xs={12}sm={12} style={{ display: 'flex' , alignItems: 'center', justifyContent:'center' }}>
      <Typography  textColor={'#626AFF'} textAlign={'center'}  level='h2' >
      You can also download them as SVG files, a little like Figma 😉 
        </Typography>
        </Grid>
        <Grid xs={3}sm={3}>
        <SvgContainer numberFromLatest={9}/>
      </Grid>
      <Grid xs={6}sm={6} style={{ display: 'flex' , alignItems: 'center', justifyContent:'center' }}>
      <Typography textColor={'#626AFF'} textAlign={'center'}  level='h2' >
      The Main Objective of this website is to store my following projects & for me to learn Web Technologies 
        </Typography>
      </Grid>
      <Grid xs={3}sm={3}>
      <SvgContainer numberFromLatest={10}/>
      </Grid>
      </Grid>
      
      </div>
    </div>
  );
}

export default App;