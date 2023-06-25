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

interface ChartProps {
  students: Student[];
}

const Chart = ({ students }: ChartProps) => {
  const data = students.map((student) => ({
    x: student.name,
    y: student.age,
  }));

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
