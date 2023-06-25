interface PaginationProps {
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  canPreviousPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
  canNextPage: boolean;
  pageCount: number;
  pageIndex: number;
  length: number;
}

export const Pagination = ({
  gotoPage,
  canPreviousPage,
  previousPage,
  nextPage,
  canNextPage,
  pageCount,
  pageIndex,
  length,
}: PaginationProps) => {
  return (
    <div className="pagination">
      <div className="navigation-button ">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"First"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"Prev"}
        </button>{" "}
      </div>
      <span>
        Page{" "}
        <strong>
          {pageIndex + 1} of {length}
        </strong>{" "}
      </span>
      {/* <span>
        | Go to :{" "}
        <input
          type="number"
          className="go-to-input"
          defaultValue={pageIndex + 1}
          onChange={(e) => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0;
            gotoPage(page);
          }}
        />
      </span>{" "} */}

      <div className="navigation-button ">
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {"Next"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {"Last"}
        </button>{" "}
      </div>
    </div>
  );
};
