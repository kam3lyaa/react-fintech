import TransactionElement from "./TransactionElement";


interface Transaction{
  name:string
  amount: number
  date:string
}

interface Props {
  data: Transaction[];
  colorIcon: string
  icon:string
}

const TransactionContainer = ({ data, colorIcon, icon } : Props) => {
  return (
            <section className="section-exib  exibir-gastos ">

            {
              data.map((item)=> {

                return (
                  <TransactionElement 
                    name={item.name}                   
                    value={item.amount}
                    date={item.date}
                    icon={icon}
                    iconColor={colorIcon}
                  />
                )

              })
              
            }







          <article className="col-11 row my-4 mx-auto my-auto " >


          </article>


      
        </section>
  );
}

export default TransactionContainer;  