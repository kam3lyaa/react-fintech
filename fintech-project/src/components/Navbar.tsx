import { useNavigate } from "react-router-dom";

function Navbar(){
  const navigate = useNavigate();
  return (

    <header className="container ">
      <nav
        className="navbar navbar-expand-lg bg-color justify-content-center"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div onClick={() => navigate("/")}  style={{cursor : "pointer"}} className="navbar-brand"><img src="/images/logo.png" className="fs-1 meu-logo me-2"/>DeQEconomy</div>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div  onClick={() => navigate("/")}  style={{cursor : "pointer"}} className="nav-link active" aria-current="page"
                  >Dashboard</div>
              </li>
              <li className="nav-item">
                <div  onClick={() => navigate("/incomes")}  style={{cursor : "pointer"}}  className="nav-link">Receitas</div>
              </li>
              <li className="nav-item">
                <div onClick={() => navigate("/expenses")}  style={{cursor : "pointer"}} className="nav-link">Gastos</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={() => navigate("/investments")}  style={{cursor : "pointer"}}>Investimentos</div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/goals">Objetivos Financeiros</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Adicionar
                </a>
                <ul className="dropdown-menu">
                  <li><div className="dropdown-item" onClick={() => navigate("/incomes/add")} style={{cursor:"pointer"}}>Receita</div></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><div  onClick={() => navigate("/expenses/add")} style={{cursor:"pointer"}} className="dropdown-item" >Gasto</div></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><div onClick={() => navigate("/investments/add")} style={{cursor:"pointer"}}  className="dropdown-item" >Investimento</div></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <a className="dropdown-item" href="#">Objetivo Fiananceiro</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <ul className="list-unstyled fs-4 ms-2 my-auto">
            <li className="nav-item">
              <a href=""><i className="bi bi-person-circle text-light"></i> </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  
  );

}

export default Navbar