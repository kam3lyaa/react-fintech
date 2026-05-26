import AddButton from '../components/AddButton';
import Navbar from '../components/Navbar';
import TransactionAddHeader from '../components/TransactionAddHeader';
import TransactionForm from '../components/TransactionForm';
import IncomeForm from '../components/IncomeForm';

const AddIncome =() => {
  return (
    <>
    <Navbar />
      
      <div className='col-11 mx-auto'>
        <TransactionAddHeader
          name="Add Income"
          color='texto-verde'
          icon='bi bi-graph-up-arrow'
          amount={200}
          />
          <TransactionForm/>
          <IncomeForm />
          <AddButton
          text='Adicionar Income'
          onClick={()=> {}}
          />
      </div>
    </>
  );
}

export default AddIncome;