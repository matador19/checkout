import './PaymentOption.css'
const PaymentOption = () => {
  return (
    <div className='container align-items-center col-md-5 mt-4' >
        <h3 className="mb-3">Payment method </h3>
        <div className="d-block my-3">
            <form className='add-form'>
                <div style={{borderRadius:20}}  >
                <input type='radio' name="payment" className="form-check-input" ></input>
                <label for='SasaPay'>Sasapay</label>
                </div>
                <div style={{borderRadius:20}}>
                <input type='radio' name="payment" className="form-check-input"></input>
                <label for='M-Pesa'>M-Pesa</label>
                </div>
                <div style={{borderRadius:20}}>
                <input type='radio' name="payment" className="form-check-input"></input>
                <label for='Credit Card'>Credit Card</label>
                </div>
                <div style={{borderRadius:20}}>
                <input type='radio' name="payment" className="form-check-input"></input>
                <label for='Debit Card'>Debit Card</label>
                </div>
                <div className="mb-2">
        <input className="form-control btn btn-block" style={{background:'Blue'}} type='Submit' value='Proceed to Pay'></input>
        </div>
            </form>
        </div>
    </div>
  )
}

export default PaymentOption