interface GrettingPops {
  name: string,
  value: number
}

function Greeting({name, value}: GrettingPops){
    return(
      
      <section className="container text-light  ps-lg-5 mt-4 bg-color">
      <div className="row">
        <div className="col-12">
          <h1 className="display-3 text-start ms-3">Olá, {name}!</h1>
        </div>
        <div className="d-flex">
          <p className="mb-0 ms-4 text-start">Saldo em conta:</p>
          <button className="bg-none meu-botao text-light  b-0">
            <i className="bi bi-eye-slash ps-0"></i>
          </button>
        </div>
        <div className="col-6 ms-4 ">
          <p className="fs-2 text-start ">R${value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  })}</p>
        </div>
      </div>
    </section>

);}

export default Greeting;