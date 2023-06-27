import { useMemo, useState } from "react";
import "./App.css";
import Table from "./table/Table";
import Chart from "./chart/Chart";
import {
  Column,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

function App() {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    const res = await fetch("http://13.234.118.240:8080/api/data");
    const data = await res.json();
    console.log(data);
    setStudents(data);
  };

  // const getStudent = (id: number) => {
  //   return async () => {
  //     const res = await fetch(`http://127.0.0.1:5000/api/data/${id}`);
  //     const data = await res.json();
  //     console.log(data);
  //     setStudent(data);
  //   };
  // };

  const data = useMemo(() => students, [students]);
  const columns = useMemo<Column<Student>[]>(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Created  on",
        accessor: "created_at",
      },
    ],
    []
  );

  const table = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      <div>
        <h3 className="title">Student Data</h3>
        <div className="load-data-container">
          <button onClick={getStudents}>Load Data</button>
          {/* <button onClick={getStudent(1)}>Load single Data</button> */}
        </div>

        <div className="data-container">
          <Table table={table} />
          <Chart page={table.page} />
        </div>
      </div>
    </>
  );
}

export default App;
