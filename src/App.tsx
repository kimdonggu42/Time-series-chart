import mockData from "./mocks/data.json";

interface MockData {
  id: string;
  value_area: number;
  value_bar: number;
}

export default function App() {
  const res = mockData.response as Record<string, MockData>;
  const resData = Object.keys(res).map((key) => {
    return { ...res[key], time: key.split(" ")[1] };
  });

  return <></>;
}
