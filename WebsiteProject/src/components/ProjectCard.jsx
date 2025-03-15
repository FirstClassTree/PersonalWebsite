import FlexVideo from "./FlexVideo.jsx";

function ProjectCard({ ProjcetVideoUrl,ProjcetDate,projectTitle,projectDescription,projectPreviewLink,projectSourceLink  }) {
  return (

    <div className="project-card">
        <div className="project-card-inner">
            <div className="project-card-title">{projectTitle}</div>
             <div className="project-card-video"> <FlexVideo  contain  videoSrc ={ProjcetVideoUrl}></FlexVideo></div>
              <div className="project-card-date">{ProjcetDate}</div>
              <p className="project-card-description">{projectDescription}</p>
              <div className="project-card-links">
                <a href={projectPreviewLink} className="project-card-preview-link">Preview</a>
                <a href ={projectSourceLink} className="project-card-source-link">Source</a>
              </div>
        </div>


    </div>
  );
}
export default ProjectCard;