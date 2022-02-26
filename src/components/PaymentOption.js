import { useState } from 'react'
import './PaymentOption.css'
const PaymentOption = () => {
  const [option,setOption]=useState('0')
  const [phoneNumber,setphoneNumber]=useState()


const onSubmit=(e)=>{
  e.preventDefault();
}

  return (
    <div id='payment' className='container align-items-center col-md-5 mt-4' >
        <h3 className="mb-3">Payment method </h3>
        <div className="d-block my-3">
        <label for="payment">Choose a payment provider:</label><br/>
        <select name="payment" value={option} onChange={(e)=>{
          setOption(e.target.value)
          }
          }>
          <option  value='0'>Choose payment</option>
          <option value='1'>Sasapay</option>
          <option value='2'>Mpesa</option>
        </select>
      { option==='1'&& <div>
          <form className='add-form' onSubmit={onSubmit}>
        <div className="mb-2">
            <label >Enter Sasapay number</label>
            <input className="form-control" type='text' placeholder='phone Number' value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}></input>
        </div>
        <div className="mb-2">
        <input className="form-control btn btn-block" style={{background:'blue'}} type='Submit' value='Submit'></input>
        </div>

          </form>
        </div>}

       {option==='2'&& <div>
          <form className='add-form' onSubmit={onSubmit}>
        <div className="mb-2">
            <label >Enter Mpesa number</label>
            <input className="form-control" type='text' placeholder='phone Number' value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}></input>
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