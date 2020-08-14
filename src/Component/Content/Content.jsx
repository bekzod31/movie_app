import React, { useState, Suspense, useEffect } from "react";
import styles from "./content.module.css";
import Cars from "../../Data/Cars.json";

const Youtube = React.lazy(() => import("../Youtube/Youtube"));
const Pagination = React.lazy(() => import("../Pagination"));
const Videos = React.lazy(() => import("../Videos"));

const customStyle = {
  screen_lg: {
    position: "fixed",
    top: 100,
    right: 10,
  },
  mobsize: {
    padding: 0,
  },
};



const Content = () => {
  const [data, setData] = useState(Cars);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(12);
  const [bgActive, setBgActive] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setBgActive(true)
  };

  const screen_size = width > 992 ? customStyle.screen_lg : null;
  const mobsize = width <= 576 ? customStyle.mobsize : null;

  let a = JSON.parse(localStorage.getItem("playlist")) || [];

  function addPlaylist(element) {
    a.push(element.title);
    localStorage.setItem("playlist", JSON.stringify(a));
  }

  return (
    <div className={styles.contentPart}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div>
              <Suspense fallback={"Loading..."}>
                <Videos
                  data={currentData}
                  mobsize={mobsize}
                  paginate={paginate}
                  addPlaylist={addPlaylist}
                />
              </Suspense>
            </div>
          </div>
          <div className="col-lg-4" style={screen_size}>
            {
              <Suspense fallback={<div>Loading...</div>}>
                <Youtube />
              </Suspense>
            }
          </div>
          <div className="col-lg-12">
            <div>
              <Suspense fallback={"Loading..."}>
                <Pagination
                  dataPerPage={dataPerPage}
                  totalData={data.length}
                  paginate={paginate}
                  bgactive={bgActive}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
