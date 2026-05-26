import { useNavigate } from "react-router-dom";
import AddButton from "../components/AddButton";
import Navbar from "../components/Navbar";
import TransactionContainer from "../components/TransactionContainer";
import TransactionListHeader from "../components/TransactionListHeader";


const expenses = [{
  name:'Almoço',
  amount: 50.5,
  date: '20-05-2026'
  },
  {
  name:'Jantar',
  amount: 50.5,
  date: '20-05-2026'
  },
  {
  name:'Internet',
  amount: 150,
  date: '20-05-2026'
  },{
  name:'Luz',
  amount: 300.5,
  date: '20-05-2026'
  }

]


const Expenses = () => {
  const navigate = useNavigate();
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