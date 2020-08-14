import React, {useReducer, Suspense, useState } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./movie.module.css";
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";
import { MovieContext } from "../../Context/MovieContext";
import DescReducer from "../../Reducer/DescReducer";
import { ADD_TO_DESCRIPTION_VIDEO } from "../../Constants/Constants";
import PlaylistVideo from "../PlaylistVideo/PlaylistVideo";
// import DescriptionVideo from '../DescriptionVideo';
const DescriptionVideo = React.lazy(() => import("../DescriptionVideo"));


const Movie = () => {
  const [element, dispatch] = useReducer(DescReducer, {});

  const [isPlaylist, setIsPlaylist] = useState(localStorage.getItem("playlist")?true:false)

  const isEx = (e) => {
    setIsPlaylist(e)
  }


  const descVideo = (e) => {
    dispatch({ type: ADD_TO_DESCRIPTION_VIDEO, video: e });
  };


  return (
    <div>
      <div className={styles.video}>
        <video
          autoPlay
          muted
          loop
          src={require("../../Resource/bgVideo1.mp4")}
          id={styles.bgVideo}
        ></video>
      </div>
      <div className={styles.content}>
        <div>
          <MovieContext.Provider value={{ descVideo, element, isEx }}>
            <Navbar isPlaylist={isPlaylist} />
            <Switch>
              <Route exact path="/" component={Content} />
              <Route exact path="/playlist" component={PlaylistVideo} />
              <Suspense fallback={"Loading..."}>
                <Route exact path="/desvideo" component={DescriptionVideo} />
              </Suspense>
            </Switch>
          </MovieContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Movie;
