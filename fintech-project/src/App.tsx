import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import './App.css'
import Expenses from "./pages/Expenses";
import AddExpense from "./pages/AddExpense";
import Incomes from "./pages/Incomes";
import AddIncome from "./pages/AddIncome";
import Investment from "./pages/Investment";
import Goal from "./pages/Goal";
import AddInvestment from "./pages/AddInvestment";
import AddGoal from "./pages/AddGoal";


function App() {
    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/goals" element={<Goal />} />
        <Route path="/goals/add" element={<AddGoal />}/>

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
