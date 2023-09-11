import { useState } from "react";
import mockData from "./mocks/data.json";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

interface MockData {
  id: string;
  value_area: number;
  value_bar: number;
}

export default function App() {
  const [district, setDistrict] = useState("");

  const res = mockData.response as Record<string, MockData>;
  const resData = Object.keys(res).map((key) => ({ ...res[key], name: key.split(" ")[1] }));

  return (
    <>
      <ResponsiveContainer width='100%' height={800}>
        <ComposedChart
          data={resData}
          margin={{
            top: 100,
            right: 50,
            bottom: 20,
            left: 50,
          }}
        >
          <CartesianGrid stroke='#f5f5f5' />
          <XAxis dataKey='name' scale='band' />
          <YAxis
            dataKey='value_bar'
            orientation='right'
            label={{ value: "Bar", angle: -90, position: "insideRight" }}
          />
          <YAxis
            yAxisId='area'
            dataKey='value_area'
            domain={[0, (max: number) => Math.max(max * 2, 200)]}
            orientation='left'
            label={{ value: "Area", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey='value_bar' fill='#7876ce' onClick={(data) => setDistrict(data.id)}>
            {resData.map((entry) => (
              <Cell fill={entry.id === district ? "#5250d1" : "#7876ce"} key={entry.id} />
            ))}
          </Bar>
          <Area
            yAxisId='area'
            type='monotone'
            dataKey='value_area'
            fill='#da5d5d'
            stroke='#da5d5d'
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
}
