import TransactionElement from "./TransactionElement";

const TransactionContainer = () => {
  return (
            <section className="section-exib  exibir-gastos ">


              {/* inicio da gambiarra */}
                <TransactionElement
    name="salário"
    iconColor='texto-verde'
    icon='bi bi-coin'
    date='27-05-1994'
    value={5000}
    />
                <TransactionElement
    name="salário"
    iconColor='texto-verde'
    icon='bi bi-coin'
    date='27-05-1994'
    value={5000}
    />


          <article className="col-11 row my-4 mx-auto my-auto " >


          </article>


      
        </section>
  );
}

export default TransactionContainer;  