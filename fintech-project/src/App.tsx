import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import './App.css'
import Expenses from "./pages/Expenses";
import Incomes from "./pages/Incomes";
import Investment from "./pages/Investment";
import Goal from "./pages/Goal";


function App() {
    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/goals" element={<Goal />} />
        <Route path="/expenses" element={<Expenses />}/>
        <Route path="/incomes" element={<Incomes />}/>
        <Route path="/investment" element={<Investment />}/>
      </Routes>
    </BrowserRouter>
    </>

  
);}

export default App
