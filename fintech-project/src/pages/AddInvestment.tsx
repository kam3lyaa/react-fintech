import AddButton from '../components/AddButton';
import Navbar from '../components/Navbar';
import TransactionAddHeader from '../components/TransactionAddHeader';
import TransactionForm from '../components/TransactionForm';
import InvestmentForm from '../components/InvestmentForm';

const AddInvestment = () => {
  return(
    <>
      <Navbar />
      
      <div className='col-11 mx-auto'>
        <TransactionAddHeader
          name="Add Expense"
          color='texto-azul2'
          icon='bi bi-graph-down-arrow'
          amount={200}
          />
          <TransactionForm/>
          <InvestmentForm />
          <AddButton
          text='Adicionar Expense'
          onClick={()=> {}}
          />
      </div>
    </>
  );
}
export default AddInvestment;