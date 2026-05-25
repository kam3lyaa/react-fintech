interface SummaryCardProps{
  name: string,
  cor: string,
  value: number,
  icone: string
}

const SummaryCard = ({ name,cor,value, icone }: SummaryCardProps) => {
    return (
          <aside className="col-6 p-3 row m-auto direcionar-receitas">
              <div
                className="col-8 p-0 align-items-end justify-content-end d-flex"
              >
                <p className="meu_texto text-center display-6">{name}</p>
              </div>
              <div className="col-4 p-0 ps-1">
                <i className={`${icone} display-6 icone-ini ${cor}`}></i>
              </div>
              <div className="col-12 ">
                <p className={`text-center mb-0 ${cor} fs-1 total-receita`}>R${value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  })}</p>
              </div>
          </aside>


);}

export default SummaryCard;

