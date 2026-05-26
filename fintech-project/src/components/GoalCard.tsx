import { useNavigate } from "react-router-dom";

interface Goal {
  name: string;
  icon: string;
  value: string;
  route: string;
}

interface GoalCardProps {
  data: Goal[];
  color: string;
}

const GoalCard = ({ data, color }: GoalCardProps) => {
  const navigate = useNavigate();

  return (
    <section className="section-exib exibir-goals">
      <div className="row g-3 justify-content-center">

        {data.map((item) => (
          <aside
            key={item.name}
            className="col-5 h-50 d-flex flex-column  col-5 mt-5 rounded-4 bg-azul m-auto p-3 d-flex flex-column align-items-center text-center"
          >

            <div className="col-4 my-auto text-center p-0">
              <i className={`${item.icon} display-1 ${color}`} />
            </div>

            <div className="p-1 meu_texto text-center d-flex flex-column justify-content-center">
              <p className="m-0 fs-3 fw-bold">{item.name}</p>
              <p className="m-0 fs-3 small">R$ {item.value}</p>

              <span className="fs-2 text-decoration-none texto-azul2"
              onClick={() => navigate(item.route)}
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