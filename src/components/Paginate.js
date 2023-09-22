import React from "react";
import styles from "../UI/myStyles.module.css";

function Paginate({ notesPerPage, totalNotes, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalNotes / notesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <ul className={styles.numbersOfPage}>
      {pageNumbers.map((number) => (
        <li
          key={number}
          onClick={() => paginate(number)}
          className={styles.numberOfPage}
        >
          {number}
        </li>
      ))}
    </ul>
  );
}

export default Paginate;
