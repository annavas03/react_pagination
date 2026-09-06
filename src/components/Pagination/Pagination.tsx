import React from 'react';
import { PaginationInterface } from '../../types/pagination';

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationInterface) => {
  const pages = Array.from({ length: totalPages }, (_, idx) => idx + 1);

  const prevBtn = `${currentPage === 1 ? 'disabled' : ''}`;
  const nextBtn = `${currentPage === totalPages ? 'disabled' : ''}`;

  const isPrevDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <ul className="pagination">
      <li className={`page-item ${prevBtn}`}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={isPrevDisabled}
          onClick={() => {
            if (!isPrevDisabled) {
              onPageChange(currentPage - 1);
            }
          }}
        >
          «
        </a>
      </li>

      {pages.map(page => (
        <li
          className={`page-item ${page === currentPage ? 'active' : ''}`}
          key={page}
        >
          <a
            data-cy="pageLink"
            className="page-link"
            href={`#${page}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        </li>
      ))}

      <li className={`page-item ${nextBtn}`}>
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={isNextDisabled}
          onClick={() => {
            if (!isNextDisabled) {
              onPageChange(currentPage + 1);
            }
          }}
        >
          »
        </a>
      </li>
    </ul>
  );
};
