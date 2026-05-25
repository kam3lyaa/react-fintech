import AddButton from "../components/AddButton";
import Navbar from "../components/Navbar";
import TransactionContainer from "../components/TransactionContainer";
import TransactionListHeader from "../components/TransactionListHeader";

const Expenses = () => {
  return (
    <>
        <Navbar/>
        <main className="container p-3 rounded-3 text-light container-principal w-100 ">
      <section className="row">
        <TransactionListHeader
          color='texto-vermelho'
          name="Expenses"
          icon="bi bi-graph-up-arrow"
          total= {200}
          />


        <TransactionContainer/>

        <AddButton 
        transaction="Gasto"/>
        
        </section>
    </main> 
    </>
  );
}

export default Expenses;