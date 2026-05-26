interface TransactionAddHeaderProps {
name: string
color: string
icon: string
amount: number
}              
const TransactionAddHeader = ({ name,color, amount, icon }: TransactionAddHeaderProps) => {
              

              
    return (
        <section className="row  my-4 mx-auto p-6">
          <aside className="col-12  rounded-4 bg-azul m-auto row align-items-center justify-content-center ">
            <div className="col-6 m-auto">
              <p className="meu_texto  display-4">{name}</p>
              <p className={`meu_texto  display-4 ${color} `}>
                <input type="text" style={{background:"none",border:'none'}} size={6} placeholder="R$ 00,00"/>
              </p>
            </div>
            <div className="col-6 p-0 ps-1 b text-center p-4">
              <i className={`${icon} display-3 icone-page ${color}`}></i>
            </div> 
          </aside>
        </section>  
    );
  }

export default TransactionAddHeader;