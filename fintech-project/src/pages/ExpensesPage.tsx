import React from 'react';
import { useNavigate } from "react-router-dom";
import AddButton from "../components/AddButton";
import Navbar from "../components/Navbar";
import TransactionContainer from "../components/TransactionContainer";
import TransactionListHeader from "../components/TransactionListHeader";
import type { Expense } from "../types/Expense";



interface ExpensesProps{
  expenses: Expense[]
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>
}



const Expenses = ({ expenses, setExpenses  }: ExpensesProps) => {
  const navigate = useNavigate();

  //const [expenses,setExpenses] = array; //--> array destructuring --> the order metters

  // const expenses = array[0];--> current data
  // const setExpenses = array[1];--> updater function

  const fetchExpenses = async () => {
    try {

      const response = await fetch('http://localhost:8080/api/expenses')
      const data = await response.json()
      setExpenses(data)
      console.log(data);
      
    }catch(error) {
      console.log(error)
    }
  }
  
  React.useEffect(() => {
    fetchExpenses()
  }, []);

    const handleDeleteExpense = async (id: number) => {
    try {
      await fetch(`http://localhost:8080/api/expenses/${id}`, {
        method: 'DELETE'
      })
      setExpenses((prev) => 
        prev.filter((expense)=> expense.id !== id)
      )
    }catch(error){
      console.log(error);
      
    }
  }

  const handleEditExpense = (id: number) => {
  navigate(`/expenses/edit/${id}`);
};
  
  return (
    <>
        <Navbar/>
        <main className="container p-3 rounded-3 text-light container-principal w-100 ">
      <section className="row">
        <TransactionListHeader
          color='texto-vermelho'
          name="Expenses"
          icon="bi bi-graph-down-arrow"
          total= {200}
          />


        <TransactionContainer data={expenses}
          colorIcon="texto-vermelho"
          icon="bi bi-cash-stack"
          onDelete={handleDeleteExpense}
          onEdit={handleEditExpense}
          />

        <AddButton 
        text="Adicionar Gasto"
        onClick={() => navigate("/expenses/add")}/>


        </section>
    </main> 
    </>
  );
}

export default Expenses;