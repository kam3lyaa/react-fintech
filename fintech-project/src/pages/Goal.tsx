import Navbar from "../components/Navbar";
import GoalCard from "../components/GoalCard";
import AddButton from "../components/AddButton";
import GoalTransactionListHeader from "../components/GoalTransactionListHeader";

const goals = [{
  name: "Mensalidade FIAP",
  icon: "bi bi-mortarboard",
  value: "755.0",
  route: "#",
  },
  {
  name: "Carro novo",
  icon: "bi bi-car-front-fill",
  value: "755.0",
  route: "#",
  },
  {
  name: "Reserva",
  icon: "bi bi-wallet",
  value: "755.0",
  route: "#",
  },{
  name: "Viagem",
  icon: "bi bi-airplane",
  value: "755.0",
  route: "#",
  }
]


const Goal = () =>  {
    return(
        <>
            <Navbar/>
            <main className="container p-3 rounded-3 text-light container-principal w-100 ">
        <section className="row">
                <GoalTransactionListHeader
                name="Meus Objetivos"
                color="texto-azul2"
                icon="bi bi-piggy-bank"
                />

                <GoalCard data={goals}
                color="texto-azul2"
                />


                <AddButton
                transaction="Objetivo"/>
                
            </section>
            </main>

        </>
    )
}

export default Goal;