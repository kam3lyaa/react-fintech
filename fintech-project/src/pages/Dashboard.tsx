import LastExpense from '../components/LastExpense';
import Navbar from '../components/Navbar'
import Greeting from '../components/Greeting'
import SummaryCard from '../components/SummaryCard';
import ActionCard from '../components/ActionCard';
import BalanceChart from '../components/BalanceChart';

const Dashboard = () =>  {

  return (
    
    <>
      <Navbar />
      <Greeting
        name= "Nicolas"
        value={ 5000 }/>

  <main className='container p-3 rounded-3 text-light container-principal w-100 '>
      <section className='row '>
        
          <SummaryCard
          name="Incomes"
          cor="texto-verde"
          value={5000}
          icone='bi bi-graph-up-arrow'
          route="/expenses"
          />
          <SummaryCard
          name="Expenses"
          cor="texto-vermelho"
          value={500}
          icone='bi bi-graph-down-arrow'
          route="/expenses"
          />


          <ActionCard 
          name='Goals'
          icon='bi bi-piggy-bank'
          size='icone-pig-ini'
          />

          <ActionCard 
          name='Investment'
          icon='bi bi bi-cash-coin'
          size='icone-invest-ini'
          />
      </section>
      
      
      <LastExpense 
        name= 'Almoço'
        value= {35}
        date= '27/09/94'
        hour= '12:20'
      />


      <BalanceChart />
</main>
    </>
  ) 
}

export default Dashboard;
