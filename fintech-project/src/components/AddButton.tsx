interface AddButtonProps {
  text: string;
  onClick: ()=> void;
}
const AddButton = ({ text, onClick } : AddButtonProps) => {
  return (
  <section className="my-5">
            
              <div className="m-auto d-flex fs-3 icone-exibicao justify-content-center ">
                <button onClick={onClick} style={{cursor:"pointer"}} className="add-button">{text}</button>
              </div>
          </section>
);}

export default AddButton;