import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Content/content.module.css";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";

const Videos = ({ data, paginate, mobsize}) => {

  const {isEx} = useContext(MovieContext)

  function showDescription(element){
    sessionStorage.setItem("description", JSON.stringify(element));
  }


  let playlist = JSON.parse(localStorage.getItem("playlist")) || [];

  function addPlaylist(element){
    playlist.push(element)
    localStorage.setItem("playlist", JSON.stringify(playlist));
    isEx(true)

  }

  

  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((element, index) => {
            return (
              <div className="col-lg-3" key={index} style={mobsize}>
                <div className={styles.cardBox}>
                  <div className={styles.cardImage}>
                    <img
                      src={require(`../Resource/Images/${element.image}`)}
                      alt=""
                    />
                    <span
                      className={styles.collect}
                      onClick={() => addPlaylist(element)}
                    >
                      <i className="fa fa-plus-square"></i>
                    </span>
                    <NavLink
                      to={"/desvideo"}
                      className="text-decoration-none"
                    >
                      <span
                        className={styles.playVideo}
                        onClick={() => showDescription(element)}
                      >
                        <i className="fa fa-play-circle"></i>
                      </span>
                    </NavLink>
                  </div>
                  <div>
                    <h5 className="pt-1 pb-2 px-1 text-white">
                      {element.title}
                    </h5>
                  </div>
                </div>
              </div>
            )
        })}
      </div>
    </div>
  );
};

export default Videos;
