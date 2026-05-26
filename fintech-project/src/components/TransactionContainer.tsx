import TransactionElement from "./TransactionElement";

type Transaction = {
  amount: number
  date: string
  description: string
}

interface Props {
  data: Transaction[];
  colorIcon: string
  icon: string
}

const TransactionContainer = ({ data, colorIcon, icon }: Props) => {

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
            />
          )

        })
      }

    </section>
  );
}

export default TransactionContainer;