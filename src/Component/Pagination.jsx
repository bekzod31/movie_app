import React from "react";
import styles from "./Content/content.module.css";

const Pagination = ({bgactive, paginate, dataPerPage, totalData }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  const bgac = bgactive? "backgroundColor: '#E94B3D'":"backgroundColor: 'black'"

  return (
    <div>
      <button className={styles.pageBtn}>
        <i className="fa fa-angle-left"></i>
      </button>
      {pageNumbers.map((number) => (
        <span key={number} onClick={() => paginate(number)} className={styles.pageSpan} style={{bgac}}>
          {number}
        </span>
      ))}
      <button className={styles.pageBtn}>
        <i className="fa fa-angle-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
