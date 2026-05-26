import React from 'react';
import AddButton from '../components/AddButton';
import Navbar from '../components/Navbar';
import TransactionAddHeader from '../components/TransactionAddHeader';
import TransactionForm from '../components/TransactionForm';
import ExpenseForm from '../components/ExpenseForm';
import { useNavigate } from 'react-router-dom';

type Expense = {
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
interface AddExpenseProps{
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>
}
const AddExpense =({setExpenses}: AddExpenseProps) => {

  const navigate = useNavigate();
  const idCategory = 2;

  const [amount, setAmount] = React.useState('');
  console.log(amount);
  const [date, setDate] = React.useState('')
    console.log(date);

  const [description, setDescription] = React.useState('');
  console.log(description);


  const [paymentMethod, setPaymentMethod] = React.useState('');
    console.log(paymentMethod);

  const [isPaid, setIsPaid] = React.useState('');
    console.log(isPaid);

  const [recurringPayment, setRecurringPayment] = React.useState('');
  console.log(recurringPayment);
  
  const handleAddExpense= async () => {
    const expense= {
      user: { id: 1 },
      category: { id: idCategory },
      date,
      amount:Number (amount),
      description,
      paymentMethod,
      paid: isPaid === 'true',
      recurringPayment: recurringPayment === 'true'
    }

    console.log(JSON.stringify(expense, null, 2));
    try{

      const response = await fetch('http://localhost:8080/api/expenses',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(expense)
      })

      const data = await response.json()
      console.log(data);
      setExpenses((prev) => [...prev, expense])
      navigate('/expenses'); 
    }catch(error) {
      console.log(error);
      
    }

    
  }


  return (
    <>
    <Navbar />
      
      <div className='col-11 mx-auto'>
        <TransactionAddHeader
          name="Add Expense"
          color='texto-vermelho'
          icon='bi bi-graph-down-arrow'
          amount={amount}
          setAmount={setAmount}
          />
          
          <TransactionForm
            date={date}
            setDate={setDate}
            description= {description}
            setDescription= {setDescription}
          />
          <ExpenseForm 
            paymentMethod={paymentMethod}
            setPaymentMethod = {setPaymentMethod}
            isPaid={isPaid}
            setIsPaid={setIsPaid}
            recurringPayment={recurringPayment}
            setRecurringPayment={setRecurringPayment}
          />
          <AddButton
          text='Adicionar Expense'
          onClick={handleAddExpense}
          />
      </div>
    </>
  );
}

export default AddExpense;