import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { Expense } from "../src/types/Expense";
import Dashboard from "./pages/Dashboard";
import React from 'react';
import './App.css'
import ExpensesPage from "./pages/ExpensesPage";
import AddExpense from "./pages/AddExpense";
import EditExpense from "./pages/EditExpense";
import Incomes from "./pages/Incomes";
import AddIncome from "./pages/AddIncome";
import Investment from "./pages/Investment";
import Goal from "./pages/Goal";
import AddInvestment from "./pages/AddInvestment";
import AddGoal from "./pages/AddGoal";


function App() {

  const [ expenses, setExpenses ] = React.useState<Expense[]>([]);
    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/goals" element={<Goal />} />
        <Route path="/goals/add" element={<AddGoal />}/>

        <Route path="/expenses" element={<ExpensesPage 
          expenses={expenses}
          setExpenses= {setExpenses}
        />}/>
        <Route path="/expenses/add" element={<AddExpense 
        setExpenses={setExpenses}
        />}/>
        <Route
          path='/expenses/edit/:id'
          element= {
            <EditExpense
              expenses={expenses}
              setExpenses={setExpenses}
              />
          }
        />

        <Route path="/incomes" element={<Incomes />}/>
        <Route path="/incomes/add" element={<AddIncome />}/>

        <Route path="/investments" element={<Investment />}/>
        <Route path="/investments/add" element={<AddInvestment />}/>

      </Routes>
    </BrowserRouter>

    </>

  
);}

export default App
