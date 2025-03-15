

import PropTypes from 'prop-types';

function FlexVideo ({videoSrc,text,contain,opacity}) { 

    text = text || "";
    FlexVideo.propTypes = {
        videoSrc: PropTypes.string.isRequired,
        text: PropTypes.string,
        contain: PropTypes.bool,
        opacity: PropTypes.bool
      };

    const containClass = contain ? "video-contain" : "video-cover";
    const opacityClass = opacity ? "video-opacity" : "video-no-opacity";



    return(
        <div className="horizantal-flex">
        <h1 className='h1-absoulte'>{text}</h1>
        <video className={`${containClass} ${opacityClass}`}  autoPlay loop muted disablePictureInPicture >
        <source src={videoSrc}  type="video/mp4" />

        </video>
        
        </div>
        

    );


}

export default FlexVideo;