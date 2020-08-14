import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import styles from "./playlistVideo.module.css";
import { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";

const PlaylistVideo = (props) => {
  const playlist = JSON.parse(localStorage.getItem("playlist"));

  const [currentUrl, setCurrentUrl] = useState(playlist[0]);
  const [width, setWidth] = useState(window.innerWidth);
  const { element, isEx } = useContext(MovieContext);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });
  const autop = JSON.parse(localStorage.getItem("checked"));

  const opts = {
    width: "100%",
    height: 500,
    playerVars: {
      autoplay: autop?1:0
    }
  };

  function clearPlaylist() {
    localStorage.removeItem("playlist");
    props.history.push("/")
    isEx(false)
  }

  function _onReady(event) {
    event.target.pauseVideo();
  }


  function removePlaylist(id){
    const a = playlist.filter(e => e.id !== id);
    localStorage.setItem("playlist", JSON.stringify(a))
  }


  return (
    <div style={{ marginTop: 120 }}>
      <h1>{element.title}</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className={styles.descVideoBox}>
              <YouTube videoId={currentUrl.videoId} opts={opts} onReady={_onReady} autoplay={true} />
            </div>
          </div>
          <div className="col-lg-4">
            <div style={{ position: "relative", marginBottom: 36 }}>
              <div className={styles.descListTop}>
                <span>Playlist</span>
                <button
                  className={styles.clearPlaylist}
                  onClick={() => {
                    clearPlaylist();
                  }}
                >
                  Clear Playlist
                </button>
              </div>
            </div>
            <div className={styles.descPlayList}>
              {playlist.map((element, index) => {
                return (
                  <div>
                    <div
                      className={styles.descListCards}
                      onClick={() => {
                        setCurrentUrl(element);
                      }}
                    >
                      <div className={styles.descListImg}>
                        <img
                          src={require(`../../Resource/Images/${element.image}`)}
                          alt=""
                        />
                      </div>
                      <div className={styles.descListText}>
                        <span className={styles.removePl} onClick={() => removePlaylist(element.id)}><i class="fa fa-trash"></i></span>
                        <span>{element.title}</span>
                      </div>
                    </div>
                    <hr className="bg-white my-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default PlaylistVideo;
