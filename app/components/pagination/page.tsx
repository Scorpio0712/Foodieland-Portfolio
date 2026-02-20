"use client";
import React from "react";
import style from "./pagination.module.css";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

function Pagination({
  totalPages,
  currentPage,
  onPageChange,
  className,
}: PaginationProps) {

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }
    return pages;
  };

  return (
    <div className={`${style.pagination_Container} ${className || ""}`}>
      {/* Pervious Btn */}
      <button
        className={style.pagination_PrevBtn}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        (
      </button>

      {/* Page Btn */}
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={`dots-${index}`} className={style.pagination_Dots}>
            ...
          </span>
        ) : (
          <button
            key={page}
            className={`${style.pagination_PageBtn} ${currentPage === page ? style.active : ""}`}
            onClick={() => onPageChange(page as number)}
          >
            {page}
          </button>
        ),
      )}

      {/* Next Btn */}
      <button
        className={style.pagination_NextBtn}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        )
      </button>
    </div>
  );
}

export default Pagination;
