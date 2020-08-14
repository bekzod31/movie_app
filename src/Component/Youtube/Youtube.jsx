import React, {useState} from "react";
import YouTube from "react-youtube";
import YoutubePlaylist from "../../Data/YoutubePlaylist.json";
import styles from "./youtube.module.css";

const Youtube = () => {
  const [videoId, setVideoId] = useState(YoutubePlaylist[0])
  const opts = {
    height: "250",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };



  return (
    <div className={styles.youtube}>
      <YouTube videoId={videoId.videoId} opts={opts} />
      <div className={styles.youtubeList}>
        {YoutubePlaylist.map((element, index) => {
          return (
            <div key={index}>
              <div className={styles.youtubeCards} onClick={() => setVideoId(element)}>
                <div className={styles.youtubeCardsImg}>
                  <img
                    src={require(`../../Resource/Images/${element.image}`)}
                    alt=""
                  />
                </div>
                <div className={styles.youtubeCardsText}>{element.title}</div>
              </div>
              <hr className="m-1" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Youtube;
