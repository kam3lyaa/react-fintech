interface TransactionElementProps {
  name: string
  iconColor:string
  icon: string
  date: string
  value: number

}

const TransactionElement = ({ iconColor, icon, date, name,value }: TransactionElementProps) => {
  return (
    
      <article className="col-11 row my-4 mx-auto my-auto " >

              <div className={`col-1 p-2 m-auto ${iconColor} d-flex  icone-exibicao justify-content-center`}>
                <i className={`${icon}`}></i>
              </div>
              
              <div className="col-3 m-0 p-2 row my-auto d-flex flex-column  text-center">
                <div className="col-12"><p className="mb-0  ">{date}</p></div>
                <div className="col-12"><p className="mb-0 ">{name}</p></div>
              </div>
              
              <div className="col-4 p-2 my-auto ">
                <p className="minha-font  fs-2">R${value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2
  })}</p>
              </div>

              <div className="col-3 p-2 my-auto  ms-2 d-flex" >
                <button className="button-delete"><i className="bi bi-trash3 "></i></button>
                <button className="button-edit"><i className="bi bi-pencil"></i></button>
              </div>

          </article>
    
  );
} 

export default TransactionElement;