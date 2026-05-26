import Navbar from "../components/Navbar"
import GoalTransactionListHeader from "../components/GoalTransactionListHeader"
import AddButton from "../components/AddButton"
import GoalForm from "../components/GoalForm"


const AddGoal = () =>{
    return(
        <>  
        <Navbar/>

            <div className='col-11 mx-auto'>
                <GoalTransactionListHeader
                name="Add Goal"
                color="texto-azul2"
                icon="bi bi-piggy-bank"
                />
                <GoalForm/>
                <AddButton
                text='Adicionar novo Objetivo'
                onClick={()=> {}}
                />
            </div>
        </>
    )
}

export default AddGoal;