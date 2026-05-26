import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import GoalCard from "../components/GoalCard";
import AddButton from "../components/AddButton";
import GoalTransactionListHeader from "../components/GoalTransactionListHeader";

const goals = [{
    name: "Mensalidade FIAP",
    icon: "bi bi-mortarboard",
    value: "755.0",
    id: "22",
    },
    {
    name: "Carro novo",
    icon: "bi bi-car-front-fill",
    value: "755.0",
    id: "23",
    },
    {
    name: "Reserva",
    icon: "bi bi-wallet",
    value: "755.0",
    id: "24",
    },{
    name: "Viagem",
    icon: "bi bi-airplane",
    value: "755.0",
    id: "25",
    }
    ];   


const Goal = () =>  {
    const navigate = useNavigate();
    return(
        <>
            <Navbar/>
            <main className="container p-3 rounded-3 text-light container-principal w-100 ">
        <section className="row">
                <GoalTransactionListHeader
                name="My Goals"
                color="texto-azul2"
                icon="bi bi-piggy-bank"
                />

                <GoalCard data={goals}
                color="texto-azul2"
                />


                <AddButton
                text='Adicionar Goal'
                onClick={()=> {navigate("/goals/add")}}
                />
                
            </section>
            </main>

        </>
    )
}

export default Goal;