import { useState, useEffect} from 'react'
import './PaymentOption.css'
const PaymentOption = ({phone}) => {
  const [option,setOption]=useState('0')
  const [phoneNumber,setphoneNumber]=useState('')
  const [total,settotal]=useState([])
  const [sum,setsum]=useState(0);
  useEffect(()=>{
    fetch('http://localhost:5000/getcart').then(res=>{
      return res.json()
    }).then(data=>{
      console.log(data)
      settotal(data)
    })
  },[])
  useEffect(()=>{
    const fun_sum = total.reduce(function(prev,curr){return prev=prev+curr.price},0)
       setsum(fun_sum)
  },[total])

const onSubmit=(e)=>{
  e.preventDefault();
  phone(phoneNumber);

  const url = 'http://localhost:3000/?phone='+phoneNumber+'&cost='+sum
  window.location.href= url;
}

const onMpesaSubmit=(e)=>{
  e.preventDefault();
  phone(phoneNumber);
  const url ='http://localhost:5000/stkpush/'+phoneNumber+'/'+sum
  window.location.href=url;
}


  return (
    <div id='payment' className='container align-items-center col-md-5 mt-4' >
        <h3 className="mb-3">Payment method </h3>
        <div className="d-block my-3">
        <label htmlFor="payment">Choose a payment provider:</label><br/>
        <select name="payment" value={option} onChange={(e)=>{
          setOption(e.target.value)
          }
          }>
          <option  value='0'>Choose payment</option>
          <option value='2'>Mpesa</option>
        </select>
      { option==='1'&& <div>
          <form className='add-form' onSubmit={onSubmit}>
        <div className="mb-2">
            <label >Enter Sasapay number</label>
            <input className="form-control" type='text' placeholder='phone Number' value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}></input>
        </div>
        <div className="mb-2">
        <button className="form-control btn btn-block" style={{background:'blue'}} type='Submit'>submit</button>
        </div>

          </form>
        </div>}

       {option==='2'&& <div>
          <form className='add-form' onSubmit={onMpesaSubmit}>
        <div className="mb-2">
            <label >Enter Mpesa number</label>
            <input className="form-control" type='text' placeholder='phone Number' value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}></input>
        </div>
        <div className="mb-2">
        <button className="form-control btn btn-block" style={{background:'blue'}} type='Submit'>submit</button>
        </div>

          </form>
        </div>}
        </div>
    </div>
  )
}

export default PaymentOption