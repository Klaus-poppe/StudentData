import { TableInstance } from "react-table";

import { GlobalFilter } from "./GlobalSearch";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { Pagination } from "./Pagination";
import PaginationCount from "./PaginationCount";

interface TableProps {
  table: TableInstance<Student>;
}

const Table = ({ table }: TableProps) => {
  // const data = useMemo(() => students, [students]);
  // const columns = useMemo<Column<Student>[]>(
  //   () => [
  //     {
  //       Header: "ID",
  //       accessor: "id",
  //     },
  //     {
  //       Header: "Name",
  //       accessor: "name",
  //     },
  //     {
  //       Header: "Age",
  //       accessor: "age",
  //     },
  //     {
  //       Header: "Created  on",
  //       accessor: "created_at",
  //     },
  //   ],
  //   []
  // );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    preGlobalFilteredRows,
    setGlobalFilter,
    // visibleColumns,
  } = table;

  return (
    <div className="table-container">
      <div className="table-options-container">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {/* <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          className="pagination-count-dropdown"
        >
          {[1, 2, 3].map((pageSize) => (
            <option className="pagination-count-options" key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select> */}
        <PaginationCount pageSize={pageSize} setPageSize={setPageSize} />
      </div>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  style={{
                    textAlign: "left",
                  }}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5em",
                    }}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <AiFillCaretDown style={{ marginTop: "5px" }} />
                        ) : (
                          <AiFillCaretUp style={{ marginTop: "5px" }} />
                        )
                      ) : (
                        ""
                      )}
                    </span>
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        gotoPage={gotoPage}
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        nextPage={nextPage}
        canNextPage={canNextPage}
        pageCount={pageCount}
        pageIndex={pageIndex}
        length={pageOptions.length}
      />
    </div>
  );
};

export default Table;
