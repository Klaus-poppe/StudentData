import "../App.css";
import "../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineMarkSeries,
} from "react-vis";
import { useEffect, useState } from "react";
import { Row } from "react-table";

interface ChartProps {
  page: Row<Student>[];
}

const Chart = ({ page }: ChartProps) => {
  const [data, setData] = useState(
    page.map((current: any) => ({
      x: current.original.name,
      y: current.original.age,
    }))
  );

  useEffect(() => {
    const res = page.map((current: any) => ({
      x: current.original.name,
      y: current.original.age,
    }));
    setData(res);
  }, [page]);

  return (
    <div>
      <div
        style={{
          width: "clamp(400px , 100% , 1300px)",
          overflowX: "scroll",
          overflowY: "hidden",
          height: "auto",
        }}
      >
        <XYPlot height={300} width={1300} xType="ordinal">
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineMarkSeries data={data} />
        </XYPlot>
      </div>
    </div>
  );
};

export default Chart;
