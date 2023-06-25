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
      <XYPlot height={300} width={500} xType="ordinal">
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineMarkSeries data={data} />
      </XYPlot>
    </div>
  );
};

export default Chart;
