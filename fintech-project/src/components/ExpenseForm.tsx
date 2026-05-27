interface ExpenseForm {
  paymentMethod:string
  setPaymentMethod:React.Dispatch<React.SetStateAction<string>>
  isPaid: string
  setIsPaid: React.Dispatch<React.SetStateAction<string>>
  recurringPayment: string
  setRecurringPayment: React.Dispatch<React.SetStateAction<string>>
} 


const ExpenseForm = ({paymentMethod, setPaymentMethod, isPaid, setIsPaid, recurringPayment, setRecurringPayment}: ExpenseForm) => {




  return(
    
      <>

    
      <label className="label-input-element">Payment method</label>
      <input type="text" value={paymentMethod} placeholder="Ex: 27/09/1994" className="mb-4 input-label" onChange={(event) => setPaymentMethod(event.target.value)}/>
    
      <label className="label-input-element">is Paid</label>
      <input type="text" value={isPaid} placeholder="Ex: 27/09/1994" className="mb-4 input-label" onChange={(e)=> setIsPaid(e.target.value)}/>
    
      <label className="label-input-element">Recurring payment</label>
      <input type="text" value={recurringPayment} placeholder="Ex: 27/09/1994" className="mb-4 input-label" onChange={(e)=> setRecurringPayment(e.target.value)}/>

      </>
  );
}
export default ExpenseForm;