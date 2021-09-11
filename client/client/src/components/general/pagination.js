import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classNames from "classnames";
const Example = (Props) => {
  const { pagination, onPageChange, reloadPage } = Props;

  const [countPage, setCountPage] = useState(1);
  const { _page, _totalRows } = pagination;

  const totalPages = Math.ceil(_totalRows / 5);
  
  const handlePageChangeNext = () => {
    setCountPage(countPage + 1);
  };
  const handlePageChangePrevious = () => {
    setCountPage(countPage - 1);
  };
  const handlePageChangeNextStep3 = () => {
    setCountPage(countPage + 3);
  };
  const handlePageChangePreviousStep3 = () => {
    setCountPage(countPage - 3);
  };
  const reload = () => {
    reloadPage();
  };

  useEffect(() => {}, []);
  return (
    <Pagination size="lg" aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink
          first
          onClick={handlePageChangePreviousStep3}
          className={countPage < 4 ? "disabled" : ""}
        />
      </PaginationItem>
      <PaginationItem onClick={reload}>
        <PaginationLink
          previous
          onClick={handlePageChangePrevious}
          className={countPage === 1 ? "disabled" : ""}
        />
      </PaginationItem>
      <PaginationItem
        onClick={reload}
        className={classNames("activePagination")}
      >
        <PaginationLink
          className={classNames("activePagination", {
            disabled: countPage > totalPages,
          })}
        >
          <Link
            className="hideTextDecoration"
            to={`/products?_page=${countPage}`}
          >
            {countPage}
          </Link>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem onClick={reload}>
        <PaginationLink
          className={countPage + 1 > totalPages ? "disabled" : ""}
        >
          <Link
            className="hideTextDecoration"
            to={`/products?_page=${countPage + 1}`}
          >
            {countPage + 1}
          </Link>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem onClick={reload}>
        <PaginationLink
          className={countPage + 2 > totalPages ? "disabled" : ""}
        >
          <Link
            className="hideTextDecoration"
            to={`/products?_page=${countPage + 2}`}
          >
            {countPage + 2}
          </Link>
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          next
          className={countPage + 3 > totalPages ? "disabled" : ""}
          onClick={handlePageChangeNext}
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          last
          className={countPage + 3 > totalPages ? "disabled" : ""}
          onClick={handlePageChangeNextStep3}
        />
      </PaginationItem>
    </Pagination>
  );
};

export default withRouter(Example);
