import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

import './App.css'
import Expenses from "./pages/Expenses";


function App() {
    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/expenses" element={<Expenses />}/>
      </Routes>
    
    </BrowserRouter>
    </>

  
);}

export default App
