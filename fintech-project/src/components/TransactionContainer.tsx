import TransactionElement from "./TransactionElement";


interface Transaction{
  name:string
  amount: number
  date:string
  id:string
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
                      key={item.id}
                    />
                  )

                })
              
            }

            </section>
  );
}

export default TransactionContainer;  