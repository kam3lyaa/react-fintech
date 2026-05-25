interface LastExpenseProps {
  name: string
  value: number
  date: string
  hour:string
}

function LastExpense({ name,value, date, hour } : LastExpenseProps){
  return(
    <>
      
          <section className="col-12 row my-4 m-auto ultimo-gasto  texto-branco">
            <a href="" className="card-link">
              <div className="col-1 p-2 m-auto texto-vermelho d-flex icone-ini justify-content-center  ">
                <i className="bi bi-coin"></i>
              </div>
              
              <div className="col-3 p-2 my-auto" >
                <p className="minha-font fs-2  text-center">{name}</p>
              </div>
              
              <div className="col-5 p-2 my-auto">
                <p className="minha-font text-center fs-2 ">R${value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  })}</p>
              </div>
              
              <div className="col-3 m-0 p-2 row my-auto text-center d-flex flex-column ">
                <div className="col-12 "><p className="mb-0 text-end mx-2">{date}</p></div>
                <div className="col-12"><p className="mb-0 text-end mx-2">{hour}</p></div>
              </div>
            </a>
          </section>
    

    </>
  );
}

export default LastExpense;