import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const {
    itemsCount,
    pageSize,
    currentPage,
    onPageChange,
    onNextPageChange,
    onPreviousPageChange,
  } = props;
  console.log(currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={() => onPreviousPageChange()}>
              Previous
            </a>
          </li>
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" onClick={() => onNextPageChange()}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
