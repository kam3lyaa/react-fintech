import TransactionElement from "./TransactionElement";

type Transaction = {
  id: number
  amount: number
  date: string
  description: string
}

interface Props {
  data: Transaction[];
  colorIcon: string
  icon: string
  onDelete: (id: number) =>void
  onEdit: (id: number) =>void
}

const TransactionContainer = ({ data, colorIcon, icon, onDelete, onEdit }: Props) => {

  return (
    <section className="section-exib exibir-gastos">

      {
        data.map((item, index) => {

          return (
            <TransactionElement
              name={item.description}
              value={item.amount}
              date={item.date}
              icon={icon}
              iconColor={colorIcon}
              key={index}
              onDelete={()=> onDelete(item.id)}
              onEdit={()=> onEdit(item.id)}
            />
          )

        })
      }

    </section>
  );
}

export default TransactionContainer;