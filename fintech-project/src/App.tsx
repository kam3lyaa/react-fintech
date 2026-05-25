import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Goal from "./pages/Goal";

import './App.css'

function App() {
    return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/goals" element={<Goal />} />
      </Routes>
    </BrowserRouter>
    </>
  
);}

export default App
