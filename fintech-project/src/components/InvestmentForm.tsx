const InvestmentForm = () => {

  return(
    
      <>

    
      <label className="label-input-element">Payout date</label>
      <input type="text" placeholder="Ex.: 27/09/1994" className="mb-4 input-label" />
    
      <label className="label-input-element">Investment name</label>
      <input type="text" placeholder="Tesouro" className="mb-4 input-label" />
    
      <label className="label-input-element">Issuing bank</label>
      <input type="text" placeholder="Ex.: Nubank" className="mb-4 input-label" />
        
      <label className="label-input-element">Taxable</label>
      <input type="text" placeholder="Ex.:S / N" className="mb-4 input-label" />
        
      <label className="label-input-element">Interest rate</label>
      <input type="text" placeholder="Ex.: 0.5" className="mb-4 input-label" />

      
      
      

    
      </>
  );
}
export default InvestmentForm;