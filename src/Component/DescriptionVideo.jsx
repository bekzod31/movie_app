import React, {useEffect, useState} from "react";
import YouTube from "react-youtube";

const DescriptionVideo = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        })
    })



    const opts = {
        width: '100%',
        height: width > 992 ? 600 : 260,
        playerVars: {
          autoplay:0
        }
    }

    const style = {
       margin: width> 992 ? '5em 20px 0px 20px': '6em 10px 0px 10px'  
    }

    function _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }

    let videoURL = JSON.parse(sessionStorage.getItem("description")).videoId;
    console.log("videoURL",videoURL)
   
  return (
    <div style={style}>
      <YouTube videoId={videoURL} opts={opts} onReady={_onReady} />
    </div>
  );
};

export default DescriptionVideo;
