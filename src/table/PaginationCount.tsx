import { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

interface PaginationCountProps {
  pageSize: number;
  setPageSize: (pageSize: number) => void;
}

const paginationOptions = [5, 10, 25];

const PaginationCount = ({ pageSize, setPageSize }: PaginationCountProps) => {
  const [open, setOpen] = useState(false);
  const paginationSelectContainer = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        paginationSelectContainer.current &&
        !paginationSelectContainer.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [paginationSelectContainer]);

  return (
    <div ref={paginationSelectContainer} style={{ position: "relative" }}>
      <div
        className="pagination-count"
        onClick={() => setOpen((prev) => !prev)}
      >
        Showing {pageSize} <AiFillCaretDown style={{ marginTop: "5px" }} />
      </div>
      {open && (
        <div className="pagination-count-options">
          {paginationOptions.map((size, i) => (
            <>
              <div
                key={size}
                className="pagination-count-option"
                onClick={() => {
                  setPageSize(Number(size));
                  setOpen((prev) => !prev);
                }}
              >
                Show {size}
              </div>
              {i !== paginationOptions.length - 1 && <hr />}
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaginationCount;
