interface AddButtonProps {
  transaction: string
}
const AddButton = ({ transaction } : AddButtonProps) => {
  
  return (
  <section className="my-5">
            
              <div className="m-auto d-flex fs-3 icone-exibicao justify-content-center ">
                <button className="add-button">Adicionar {transaction}</button>
              </div>
          </section>
);}

export default AddButton;