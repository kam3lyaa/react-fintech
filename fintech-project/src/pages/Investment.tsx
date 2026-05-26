import { useNavigate } from "react-router-dom";
import AddButton from "../components/AddButton";
import Navbar from "../components/Navbar";
import TransactionContainer from "../components/TransactionContainer";
import TransactionListHeader from "../components/TransactionListHeader";
const incomes = [{
  name:'Tesouro direto',
  amount: 550.5,
  date: '20-05-2026'
  },
  {
  name:'CDI',
  amount: 5000.5,
  date: '20-05-2026'
  },
  {
  name:'Tesouro Direto',
  amount: 150,
  date: '20-05-2026'
  },{
  name:'Investimento',
  amount: 300.5,
  date: '20-05-2026'
  }
];

const Investment = () => {
  const navigate = useNavigate();
  return (
    <>
        <Navbar/>
        <main className="container p-3 rounded-3 text-light container-principal w-100 ">
      <section className="row">
        <TransactionListHeader
          color='texto-azul2'
          name="Investment"
          icon="bi bi-bank"
          total= {20000}
          />


        <TransactionContainer
          data={incomes}
          icon="bi bi-currency-exchange"
          colorIcon="texto-azul2"
        />

        <AddButton 
        text="Adicionar investimento"
        onClick={()=> { navigate("/investments/add")}}
        />
        
        </section>
    </main> 
    </>
  );
}

export default Investment;