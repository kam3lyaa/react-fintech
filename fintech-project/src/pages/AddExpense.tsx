import AddButton from '../components/AddButton';
import Navbar from '../components/Navbar';
import TransactionAddHeader from '../components/TransactionAddHeader';
import TransactionForm from '../components/TransactionForm';
import ExpenseForm from '../components/ExpenseForm';

const AddExpense =() => {
  return (
    <>
    <Navbar />
      
      <div className='col-11 mx-auto'>
        <TransactionAddHeader
          name="Add Expense"
          color='texto-vermelho'
          icon='bi bi-graph-down-arrow'
          amount={200}
          />
          <TransactionForm/>
          <ExpenseForm />
          <AddButton
          text='Adicionar Expense'
          onClick={()=> {}}
          />
      </div>
    </>
  );
}

export default AddExpense;