function Navbar(){
  return (

    <header className="container ">
      <nav
        className="navbar navbar-expand-lg bg-color justify-content-center"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="/images/logo.png" className="fs-1 meu-logo me-2"/>DeQEconomy</a>
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
                <a className="nav-link active" aria-current="page" href="#"
                  >Dashboard</a
                >
              </li>
              <li className="nav-item">
                <a className="nav-link" href="receitas.html">Receitas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="gastos.html">Gastos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="investimentos.html">Investimentos</a>
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
                  <li><a className="dropdown-item" href="receitas.html">Receita</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Gasto</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Investimento</a></li>
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