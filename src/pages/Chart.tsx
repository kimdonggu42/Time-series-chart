import styled from "styled-components";
import mockData from "../mocks/data.json";
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
import CustomTooltip from "../components/CustomTooltip";
import { regions } from "../constants/region";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

interface MockData {
  id: string;
  value_area: number;
  value_bar: number;
}

export default function Chart() {
  const [searchParams] = useSearchParams();

  const region = searchParams.get("region");

  const navigate = useNavigate();
  const res = mockData.response as Record<string, MockData>;
  const resData = Object.keys(res).map((key) => ({ ...res[key], name: key.split(" ")[1] }));

  const FilterOff = () => {
    navigate(`/chart`);
  };

  const selectRegion = (name: string) => {
    navigate(`?region=${name}`);
  };

  return (
    <>
      <ButtonArea>
        <FilteringButton onClick={FilterOff}>해제</FilteringButton>
        {regions.map((regionName) => (
          <FilteringButton
            key={regionName}
            onClick={() => selectRegion(regionName)}
            active={region === regionName}
          >
            {regionName}
          </FilteringButton>
        ))}
      </ButtonArea>
      <ResponsiveContainer width='100%' height={800}>
        <ComposedChart
          data={resData}
          margin={{
            top: 50,
            right: 50,
            bottom: 50,
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
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey='value_bar' fill='#7876ce' onClick={(data) => selectRegion(data.id)}>
            {resData.map((entry) => (
              <Cell fill={entry.id === region ? "#5741bf" : "#9ea0fe"} key={entry.id} />
            ))}
          </Bar>
          <Area
            yAxisId='area'
            type='monotone'
            dataKey='value_area'
            fill='#f98e8e'
            stroke='#f98e8e'
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
}

const ButtonArea = styled.div`
  display: flex;
  column-gap: 10px;
  padding: 0 50px;
  margin-top: 50px;
`;

const FilteringButton = styled.button<{ active?: boolean }>`
  font-weight: 600;
  padding: 4px 10px;
  border: 1px solid #9baeb5;
  border-radius: 50px;
  color: ${({ active }) => (active ? "white" : "#9baeb5")};
  background-color: ${({ active }) => (active ? "#9baeb5" : "inherit")};
  cursor: pointer;
`;
