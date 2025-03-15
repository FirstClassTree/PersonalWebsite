import Nav from "./components/Navi";
import ProjectCard from "./components/ProjectCard";
import Grid from '@mui/joy/Grid';
import ParkSpot from "./assets/ParkSpot.mp4";


const Projects =() => {

    return (
        <div className="main">
            <Nav className="Nav"></Nav>
            <Grid  direction={"row"} container spacing={1} sx={{flexGrow:1, margin: "0.4rem" }}>
                <Grid xs={12} sm={6} >
                <ProjectCard 
                ProjcetVideoUrl={ParkSpot}
                projectTitle={"ParkSpot"}
                ProjcetDate={"Approx. Oct 2018 - May 2019"}
                projectDescription={"Native Android Project - using Java, Android Studio, and Google Maps API to produce a parking spot saving, navigation, and sharing application."}
                projectPreviewLink={"https://drive.google.com/file/d/135HflUY14VacVtzjNPEjHjPw8eSezW4b/view?usp=sharing"}
                projectSourceLink={"https://drive.google.com/drive/folders/1A9M6H_pzUtdMwQpxSFjQd9Q-sXt_UxJr?usp=sharing"}
                ></ProjectCard>
                </Grid>
                <Grid xs={12}sm={6}>
                <ProjectCard></ProjectCard>
                </Grid>
                <Grid xs={12}sm={12}>
                <ProjectCard></ProjectCard>
                </Grid>
                


            </Grid>
        </div>

    );

};

export default Projects;