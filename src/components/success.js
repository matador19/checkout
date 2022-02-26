import {useEffect} from 'react'
import {useState} from 'react'
import './Success.css' 
const Success = () => {
  const [billings,setbillings]=useState(null);
  /*useEffect(()=>{
    fetch('http://localhost:8000/billing').then(res=>{
      return res.json()
    }).then(data=>{
      console.log(data)
      setbillings(data)
    })
  },[])*/
  return (
    <div  className='container align-items-center col-md-5 mt-4' >
        <div>
            <h3>Your billing details</h3>
        </div>
        <h5></h5>
        <div>
        <h6 className='mt-5'>Your transaction is a success!!!</h6>
        </div>
        
    </div>
  )
}

export default Success