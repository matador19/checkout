import { useState } from 'react'
import './PaymentOption.css'
const PaymentOption = () => {
  const [showOption,setshowOption]=useState(false)
  const [phoneNumber,setphoneNumber]=useState()
const showSasapay=()=>{
  setshowOption(showOption=true)
}

  return (
    <div className='container align-items-center col-md-5 mt-4' >
        <h3 className="mb-3">Payment method </h3>
        <div className="d-block my-3">
        <label for="payment">Choose a payment provider:</label><br/>
        <select name="payment" id="payment">
          <option>Choose payment</option>
          <option onClick={showSasapay}>Sasapay</option>
        </select>
       {showOption&& <div>
          <form className='add-form' onSubmit={onSubmit}>
        <div className="mb-2">
            <label >Enter phoneNumber</label>
            <input className="form-control" type='text' placeholder='Email' value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}></input>
        </div>
        <div className="mb-2">
        <input className="form-control btn btn-block" style={{background:'blue'}} type='Submit' value='Submit'></input>
        </div>

          </form>
        </div>}
        </div>
    </div>
  )
}

export default PaymentOption