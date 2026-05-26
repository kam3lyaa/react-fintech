interface GoalTransactionListHeaderProps {
  name: string
  color: string
  icon: string
}              
              
const GoalTransactionListHeader= ({ name,color, icon }: GoalTransactionListHeaderProps) => {              
              
    return (
        <section className="row  my-4 mx-auto p-6">
          <aside className="col-12  rounded-4 bg-azul m-auto row align-items-center justify-content-center ">
            <div className="col-6 m-auto">
              <p className="meu_texto display-4">{name}</p>
            </div>
            <div className="col-6 p-0 ps-1 b text-center p-4">
              <i className={`${icon} display-3 icone-page ${color}`}></i>
            </div> 
          </aside>
        </section>  
    );
  }

  export default GoalTransactionListHeader;