import React from "react";

interface TransactionForm{
  date:string
  setDate:React.Dispatch<React.SetStateAction<string>>
  description:string
  setDescription:React.Dispatch<React.SetStateAction<string>>
}

const TransactionForm = ({ date, setDate, description, setDescription }: TransactionForm) => {


  return(
    
      <>
      
      <label className="label-input-element">Date</label>
      <input type="text" value={date} placeholder="Ex: 27/09/1994" className="mb-4 input-label" onChange={(event)=>setDate(event.target.value)} />
      
      <label className="label-input-element">Description</label>
      <input type="text" value={description} placeholder="Ex: Almoço" className="mb-4 input-label" onChange={(event) => setDescription(event.target.value)}/>


    
      </>
  );
}
export default TransactionForm;