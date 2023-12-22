

function flexVideo ({videoSrc,text}) { 

    text = text || "";

    return(
        <div className="horizantal-flex">
        <h1 className='h1-absoulte'>{text}</h1>
        <video className="video" autoPlay loop muted disablePictureInPicture >
        <source src={videoSrc}  type="video/mp4" />

        </video>
        
        </div>
        

    );


}

export default flexVideo;