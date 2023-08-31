import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

function Pagination({ pageLength, setCurrentPage }) {
  return (
    // <section className={styles.root}>
    <ReactPaginate
      className={styles.root}
      activeClassName={styles.active}
      breakLabel="..."
      previousLabel="Назад"
      previousClassName={styles.previous}
      nextLabel="Далі"
      nextClassName={styles.next}
      onPageChange={(e) => setCurrentPage(e.selected + 1)}
      pageRangeDisplayed={5}
      pageClassName={styles.pages}
      pageCount={pageLength}
      renderOnZeroPageCount={null}
    />
    // </section>
  );
}

export default Pagination;
