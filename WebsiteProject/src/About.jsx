import Nav from "./components/Navi";
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar';
import png from "./assets/tal.jpg"


const About =() => {
    return(
        <div className="main"> 
            <Nav></Nav>

            <Typography   textAlign={'center'}  level='h1' >
                I had made this website in about 2 months, most of the time was spent learning the vast amount of web Technologies available, starting from the bottom up with, HTML, CSS, and Javascript, and then moving on to React, NodeJs and Express, deploying using google's  firebase. 
        </Typography>
        <Typography   textAlign={'center'}  level='h1' >
            The Development process taking around 2 weeks.
            
                    </Typography>
                    <div className="flex-container-horizental">

                    <img className="img" src={png} alt="Tal" ></img>
                    </div>
        </div>
    );
};

export default About;