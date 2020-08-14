import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import styles from "./navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {

  
  const [mobicon, setMobicon] = useState(false);
  const [mopen, setMopen] = useState(false);
  const [checked, setChecked] = useState(JSON.parse(localStorage.getItem("checked")));



  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 992) {
        setMobicon(true);
      } else {
        setMobicon(false);
      }
    });
  });



  function handleChange() {
    localStorage.setItem("checked", !checked)
    setChecked(JSON.parse(localStorage.getItem("checked")))
  }
 
  

  return (
    <div className={styles.navBox}>
      <div className="container-fluid py-2">
        <div className="row  d-flex align-items-center">
          <div className="col-lg-4 d-flex justify-content-between">
            <NavLink to="/" className="text-decoration-none">
              <span className={styles.logo}>Movie</span>
            </NavLink>
            {mobicon ? (
              <div className={styles.drop}>
                <span onClick={() => setMopen(!mopen)}>
                  {!mopen ? (
                    <i className="fa fa-ellipsis-v fa-1x"></i>
                  ) : (
                    <i className="fa fa-times-circle"></i>
                  )}
                </span>
                {mopen ? (
                  <div className={styles.mobileScreen}>
                    <NavLink to="/playlist"><span>Playlist</span></NavLink>
                    <span className="d-flex">
                      Автовоспроиведение
                      <span className="d-flex align-items-center">
                        <Switch
                          onChange={() => handleChange()}
                          checked={checked}
                          offColor="#394551"
                          width={34}
                          height={18}
                          className="ml-2"
                        />
                      </span>
                    </span>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
          <div className="col-lg-4">
            <form>
              <div className={styles.searchBox}>
                <input type="search" className={styles.search} />
                <span className={styles.searchBtn}>
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </form>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            {!mobicon ? (
              <div className={styles.link}>
                <NavLink to="/playlist"  ><span>{props.isPlaylist?"Плайлист":"empty"}</span></NavLink>
                <span>
                  Автовоспроиведение
                    <Switch
                      onChange={() => handleChange()}
                      checked={checked}
                      offColor="#394551"
                      width={34}
                      height={18}
                      className="ml-2"
                    />
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
