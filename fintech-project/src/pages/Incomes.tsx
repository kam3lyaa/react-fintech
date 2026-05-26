import AddButton from "../components/AddButton";
import Navbar from "../components/Navbar";
import TransactionContainer from "../components/TransactionContainer";
import TransactionListHeader from "../components/TransactionListHeader";

const incomes = [{
  name:'Freelancer',
  amount: 550.5,
  date: '20-05-2026'
  },
  {
  name:'Salário',
  amount: 5000.5,
  date: '20-05-2026'
  },
  {
  name:'Pix',
  amount: 150,
  date: '20-05-2026'
  },{
  name:'Hora extra',
  amount: 300.5,
  date: '20-05-2026'
  }

]
const Incomes = () => {
  return (
    <>
        <Navbar/>
        <main className="container p-3 rounded-3 text-light container-principal w-100 ">
      <section className="row">
        <TransactionListHeader
          color='texto-verde'
          name="Income"
          icon="bi bi-graph-up-arrow"
          total= {200}
          />


        <TransactionContainer data={incomes} 
        colorIcon="texto-verde"
        icon="bi bi-cash-coin"
        />

        <AddButton 
        transaction="Receita"/>
        
        </section>
    </main> 
    </>
  );
}

export default Incomes;