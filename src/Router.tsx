import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Chart from "./pages/Chart";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/chart' />} />
        <Route path='/chart' element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
}
