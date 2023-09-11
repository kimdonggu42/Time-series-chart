import styled from "styled-components";

interface Payload {
  id: string;
  name: string;
  value_area: number;
  value_bar: number;
}

interface PayloadList {
  chartType: undefined;
  color: string;
  dataKey: string;
  fill: string;
  formatter: undefined;
  name: string;
  payload: Payload;
  type: undefined;
  unit: undefined;
  value: number;
}

export default function CustomTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: PayloadList[];
}) {
  if (active && payload && payload.length) {
    return (
      <ToolTipBox>
        <div>{`id: ${payload[0].payload.id}`}</div>
        <ValueBar>{`value_bar: ${payload[0].payload.value_bar}`}</ValueBar>
        <ValueArea>{`value_area: ${payload[0].payload.value_area}`}</ValueArea>
      </ToolTipBox>
    );
  }

  return null;
}

const ToolTipBox = styled.div`
  padding: 15px;
  border-radius: 10px;
  background-color: white;
`;

const ValueBar = styled.div`
  color: #5250d1;
`;

const ValueArea = styled.div`
  color: #da5d5d;
`;
