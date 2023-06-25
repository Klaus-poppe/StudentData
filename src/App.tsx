import { useState } from "react";
import "./App.css";
import Table from "./table/Table";
import Chart from "./chart/Chart";

function App() {
  const [students, setStudents] = useState([]);
  // const [student, setStudent] = useState({});

  const getStudents = async () => {
    const res = await fetch("http://127.0.0.1:5000/api/data");
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

  return (
    <>
      <div>
        <h3 className="title">Student Data</h3>
        <div className="load-data-container">
          <button onClick={getStudents}>Load Data</button>
          {/* <button onClick={getStudent(1)}>Load single Data</button> */}
        </div>

        <div className="data-container">
          <Table students={students} />
          <Chart students={students} />
        </div>
      </div>
    </>
  );
}

export default App;
