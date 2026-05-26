import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import React from 'react';
import './App.css'
import ExpensesPage from "./pages/Expenses";
import AddExpense from "./pages/AddExpense";
import Incomes from "./pages/Incomes";
import AddIncome from "./pages/AddIncome";
import Investment from "./pages/Investment";
import Goal from "./pages/Goal";
import AddInvestment from "./pages/AddInvestment";
  type Expense =  {
  user: {
    id: number
  }

  category: {
    id: number
  }

  amount: number
  date: string
  description: string
  paymentMethod: string
  paid: boolean
  recurringPayment: boolean
}

function App() {

  const [ expenses, setExpenses ] = React.useState<Expense[]>([]);
    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        <Route path="/goals" element={<Goal />} />

        <Route path="/expenses" element={<ExpensesPage 
          expenses={expenses}
          setExpenses= {setExpenses}
        />}/>
        <Route path="/expenses/add" element={<AddExpense 
        setExpenses={setExpenses}
        />}/>

        <Route path="/incomes" element={<Incomes />}/>
        <Route path="/incomes/add" element={<AddIncome />}/>

        <Route path="/investments" element={<Investment />}/>
        <Route path="/investments/add" element={<AddInvestment />}/>

        <Route path="/goal" element={<Goal />}/>

        

      </Routes>
    </BrowserRouter>

    </>

  
);}

export default App
