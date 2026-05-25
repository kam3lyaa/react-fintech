interface ActionCardsProps {
  name: string
  icon: string
  size: string
}

const ActionCard = ({ name, icon, size }: ActionCardsProps) =>  {

        return (
          <aside className="col-5  rounded-4 bg-azul m-auto row direcionar-objetivos">
            <div className="col-8  meu_texto p-0 py-1 my-4 text-center"><p className="">{name}</p></div>
            <div className="col-4  my-auto mx-auto p-0"><i className={`${icon} display-4 ${size} texto-azul2`}></i>
            </div>
          </aside>

);}

export default ActionCard;