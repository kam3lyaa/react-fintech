import { useNavigate } from "react-router-dom";

interface Goal {
  name: string;
  icon: string;
  value: string;
  id:string
}

interface GoalCardProps {
  data: Goal[];
  color: string;
}

const GoalCard = ({ data, color }: GoalCardProps) => {
  const navigate = useNavigate();

  return (
    <section className="section-exib exibir-goals  row g-3 align-items-stretch">
      <div className="row">

        {data.map((item) => (
          <aside
            key={item.name}
            className="col-5 h-50 d-flex flex-column  col-5 mt-5 rounded-4 bg-azul m-auto p-3 d-flex flex-column align-items-center text-center"
          >

            <div className="col-4 my-auto text-center p-0">
              <i className={`${item.icon} display-1 ${color}`} />
            </div>

            <div className="col-8 p-1 meu_texto text-center text-start d-flex flex-column justify-content-center">
              <p className="m-0 fs-1 fw-bold">{item.name}</p>
              <p className="m-0 fs-1 small">R$ {item.value}</p>

              <span className="fs-1 text-decoration-none texto-azul2"
              onClick={() => navigate("")}
                style={{ cursor: "pointer" }}
            >
                Ver mais
              </span>
            </div>
          </aside>
        ))}

      </div>
    </section>
  );
};

export default GoalCard;