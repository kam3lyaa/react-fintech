import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import './App.css'
import Expenses from "./pages/Expenses";
import AddExpense from "./pages/AddExpense";
import Incomes from "./pages/Incomes";
import AddIncome from "./pages/AddIncome";
import Investment from "./pages/Investment";
import AddInvestment from "./pages/AddInvestment";


function App() {
    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/expenses" element={<Expenses />}/>
        <Route path="/expenses/add" element={<AddExpense />}/>

        <Route path="/incomes" element={<Incomes />}/>
        <Route path="/incomes/add" element={<AddIncome />}/>

        <Route path="/investments" element={<Investment />}/>
        <Route path="/investments/add" element={<AddInvestment />}/>

      </Routes>
    
    </BrowserRouter>

    </>

  
);}

export default App
